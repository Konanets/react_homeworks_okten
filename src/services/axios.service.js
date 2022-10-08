import axios from "axios";
import {baseURL} from "../configs";
import {authService} from "./auth.service";
import {createBrowserHistory} from "history";

const history=createBrowserHistory()


const axiosInstance = axios.create({
    baseURL,
    headers: {}
})


axiosInstance.interceptors.request.use((config) => {

    const accessToken = authService.getAccess()

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config

})

let isRefreshing = false;

axiosInstance.interceptors.response.use(config => config, async (error) => {
    const refreshToken = authService.getRefresh()

    if (error.response?.status === 401 && refreshToken && !isRefreshing) {
        isRefreshing = true;
        try {
            const {data} = await authService.refresh(refreshToken)
            authService.saveTokens(data)
        } catch (e) {
            authService.removeTokens()
            history.replace('/logout')
        }
        isRefreshing = false;
        return axiosInstance(error.data)
    }

    return Response.reject(error)

})


export {axiosInstance,history}