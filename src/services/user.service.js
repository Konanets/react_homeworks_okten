import {axiosInstance} from "./axios.service";
import {_urls} from "../configs";


const userService={
    getUsers:()=>axiosInstance.get(_urls.users),
    getUser:(id)=>axiosInstance.get(_urls.users+'/'+id)
}

export {userService}