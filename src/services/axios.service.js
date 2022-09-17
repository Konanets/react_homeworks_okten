import axios from "axios";

import {baseURL} from "../configs";

const axiosService=axios.create({
    baseURL:baseURL,
    headers:{'Content-Type': 'application/json',}
})

export {axiosService}