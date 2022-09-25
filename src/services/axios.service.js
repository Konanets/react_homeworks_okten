import axios from "axios";
import {baseUrls} from "../configs";

const axiosInstance=axios.create({
    baseURL:baseUrls.carSite,
    headers:{}
})

export {axiosInstance}