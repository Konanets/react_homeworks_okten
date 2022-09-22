import {axiosInstance} from "./axios.service";
import {_urls} from "../configs";

const userService={
    getUsers:()=>axiosInstance.get(_urls.users),
    postUser:(user)=>axiosInstance.post(_urls.users,user)
}

export {userService}