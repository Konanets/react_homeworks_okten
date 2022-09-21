import axios from "axios";
import {baseUrls} from "../confings";

const axiosInstance=axios.create({
    baseURL:baseUrls.CarsSiteLink,
    headers:{'Content-Type':'application/json'}
})

export {axiosInstance}