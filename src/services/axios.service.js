import axios from "axios";
import {createBrowserHistory} from "history";

import {baseUrl} from "../configs";
import {authService} from "./auth.service";



const history=createBrowserHistory()


const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})


axiosInstance.interceptors.request.use((config) => {

    const accessToken = authService.getAccessToken()

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

let isRefreshing = false

axiosInstance.interceptors.response.use((config) => {
    return config
}, async (error) => {

    const refreshToken = authService.getRefreshToken()

    if (error.response?.status === 401 && refreshToken && !isRefreshing) {
        isRefreshing = true
        try {
            const {data} = await authService.refresh(refreshToken)
            authService.setTokens(data)
        } catch (e) {
            authService.removeTokens()
            history.replace('/login?expSession=true')
        }

        isRefreshing = false

        return axiosInstance(error.config)

    }
    return Promise.reject(error)

})


export {axiosInstance,history}