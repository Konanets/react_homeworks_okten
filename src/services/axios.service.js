import axios from "axios";
import {baseUrl} from "../configs/urls";
import {authService} from "./auth.service";
import {createBrowserHistory} from "history";

const history=createBrowserHistory()

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

axiosInstance.interceptors.request.use((config) => {

    const access = authService.getAccessToken()

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }

    return config
})

let isRefreshing = false;

axiosInstance.interceptors.response.use((config) => config, async (error) => {

    const refresh = authService.getRefreshTokem()

    if (error.response?.status===401 && refresh && !isRefreshing) {
        isRefreshing = true
        try {
            const {data} = await authService.refresh(refresh)
            authService.saveTokens(data)
        } catch (e) {
            authService.removeTokens()
            history.replace('/logout?must=true')
        }
        isRefreshing=false

        return axiosInstance(error.config)
    }

    return Promise.reject(error)


})

export {axiosInstance, history}