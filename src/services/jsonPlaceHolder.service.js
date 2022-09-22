import {axiosInstance} from "./axios.service";

const userService={
    getUsers:()=>axiosInstance.get(_urls.users),
    postUser:(user)=>axiosInstance.post(_urls.users,user)
}