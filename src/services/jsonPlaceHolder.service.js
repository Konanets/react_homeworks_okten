import {axiosInstance} from "./axios.service";
import {_urls} from "../configs ";

const getService={
    getTodos:()=>axiosInstance.get(_urls.todos),
    getComments:()=>axiosInstance.get(_urls.comments),
    getAlbums:()=>axiosInstance.get(_urls.albums),
    getPostsById:(id)=>axiosInstance.get(_urls.posts+'/'+id)
}

export {getService}