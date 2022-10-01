import {axiosInstance} from "./axios.service";
import {_urls} from "../configs";

const _accessTokenKey='access';
const _refreshTokenKey='refresh';

const authService = {
    registration: (user) => axiosInstance.post(_urls.users, user),
    login: (user) => axiosInstance.post(_urls.auth.login, user),
    refresh:(refresh)=>axiosInstance.post(_urls.auth.refresh, {refresh}),

    setTokens:({access,refresh})=>{
        localStorage.setItem(_accessTokenKey,access);
        localStorage.setItem(_refreshTokenKey,refresh);
    },
    removeTokens:()=>{
        localStorage.removeItem(_accessTokenKey);
        localStorage.removeItem(_refreshTokenKey);
    },
    getAccessToken:()=>localStorage.getItem(_accessTokenKey),
    getRefreshToken:()=>localStorage.getItem(_refreshTokenKey)

}

export {authService}