import axios from "axios";

const axiosInstance=axios.create({
    baseURL:baseUrls.jsonPlaceHolder,
    headers:{'Content-Type':'application/json'}
})

export {axiosInstance}