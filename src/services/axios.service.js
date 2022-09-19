import axios from "axios";

import {baseUrl} from "../configs";

const axiosInstance=axios.create({
    baseURL:baseUrl,
    headers:{'Content-Type': 'application/json'}
})

export {axiosInstance}