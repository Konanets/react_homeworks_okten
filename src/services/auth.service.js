import {axiosInstance} from "./axios.service";
import {_urls} from "../configs/urls";


const _accessToken = 'access'
const _refreshToken = 'refresh'

const authService = {
    registration: (user) => axiosInstance.post(_urls.users, user),
    login: (user) => axiosInstance.post(_urls.auth.login, user),
    refresh:(refresh)=>axiosInstance.post(_urls.auth.refresh, {refresh}),
    saveTokens: ({access, refresh}) => {
        localStorage.setItem(_accessToken, access);
        localStorage.setItem(_refreshToken, refresh);
    },
    removeTokens:()=>{
        localStorage.removeItem(_accessToken);
        localStorage.removeItem(_refreshToken);
    },
    getAccessToken:()=>{
        return localStorage.getItem(_accessToken);
    },
    getRefreshTokem:()=>{
        return localStorage.getItem(_refreshToken);
    }

}

export {authService}