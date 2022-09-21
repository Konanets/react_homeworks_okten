import {axiosInstance} from "./axios.services";
import {_urls} from "../confings";

const carService={
    getCars:()=>axiosInstance.get(_urls.cars),
    postCar:(car)=>axiosInstance.post(_urls.cars,car),
    updateCar:(id,car)=>axiosInstance.put(_urls.cars+'/'+id, car),
    deleteCar:(id)=>axiosInstance.delete(_urls.cars+'/'+id)
}

export {
    carService
}