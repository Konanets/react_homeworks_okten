import {axiosInstance} from "./axios.service";
import {urls} from "../configs";



const getService={
    getUsers:()=>axiosInstance.get(urls.users),
    getUser:(id)=>axiosInstance.get(urls.users+'/'+id),
    getPosts:(id)=>axiosInstance.get(urls.users+'/'+id+urls.posts)
}

export {getService}