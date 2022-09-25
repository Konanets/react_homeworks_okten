import {axiosInstance} from "./axios.service";
import {_urls} from "../configs";

const carsService={
    getCars:()=>axiosInstance.get(_urls.cars),
    postCar:(car)=>axiosInstance.post(_urls.cars,car),
    carDel:(id)=>axiosInstance.delete(_urls.cars+'/'+id),
    carUpdate:(id,car)=>axiosInstance.put(_urls.cars+'/'+id,car)
}

export {carsService}