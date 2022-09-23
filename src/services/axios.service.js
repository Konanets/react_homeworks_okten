import axios from "axios";
import {baseUrls} from "../configs ";

const axiosInstance=axios.create({
    baseURL:baseUrls.jsonPlaceHolder,
    headers:{}
})

export {axiosInstance}