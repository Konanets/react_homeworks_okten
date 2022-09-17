import {axiosService} from "./axios.service";

import {urls} from "../configs";

const userService={
    getAllUsers:()=>axiosService.get(urls.users),
    getCurrentUserPosts:(id)=>axiosService.get(urls.users+'/'+id+urls.posts)
}

export {
    userService
}