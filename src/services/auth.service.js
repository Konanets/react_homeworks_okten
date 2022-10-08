import {axiosInstance} from "./axios.service";
import {_access, _refresh, _urls} from "../configs";


const authService={
    login:(user)=>axiosInstance.post(_urls.auth.logination, user),
    registration:(user)=>axiosInstance.post(_urls.users,user),
    refresh:(refresh)=>axiosInstance.post(_urls.auth.refresh,{refresh}),

    saveTokens:({refresh,access})=>{
        localStorage.setItem(_access,access);
        localStorage.setItem(_refresh,refresh);
    },
    removeTokens:()=>{
        localStorage.removeItem(_access);
        localStorage.removeItem(_refresh);
    },
    getAccess:()=>localStorage.getItem(_access),
    getRefresh:()=>localStorage.getItem(_refresh),
}

export {authService}