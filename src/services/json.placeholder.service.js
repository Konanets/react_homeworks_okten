import {axiosInstance} from "./axios.service";
import {_urls} from "../configs";

const getService={
    getUsers:()=>axiosInstance.get(_urls.users),
    getPosts:()=>axiosInstance.get(_urls.posts),
    getComments:()=>axiosInstance.get(_urls.comments),
    getTodos:()=>axiosInstance.get(_urls.todos)
}

export {getService}