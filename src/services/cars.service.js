import {axiosInstance} from "./axios.service";
import {_urls} from "../configs";

const carService={
    getAll:(page)=>axiosInstance.get(_urls.cars,{params:page}),
    addCar:(car)=>axiosInstance.post(_urls.cars,car),
    addCarPhoto:(id,photo)=>axiosInstance.patch(_urls.cars+'/'+id,photo)
}

export {carService}