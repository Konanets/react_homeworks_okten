import {axiosInstance} from "./axios.Service";
import {_urls} from "../configs";


const getService={
    getUsers:()=>axiosInstance.get(_urls.users),
    getUser:(id)=>axiosInstance.get(_urls.users+'/'+id),
    getComments:()=>axiosInstance.get(_urls.comments),
    getPosts:()=>axiosInstance.get(_urls.posts)
}

export {getService}