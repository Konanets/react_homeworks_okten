import {axiosInstance} from "./axios.service";
import {_urls} from "../configs";


const carsService={
    getCars:()=>axiosInstance.get(_urls.cars),
    addCar:(car)=>axiosInstance.post(_urls.cars,car),
    updateCar:(id,car)=>axiosInstance.put(_urls.cars+'/'+id,car),
    deleteCar:(id)=>axiosInstance.delete(_urls.cars+'/'+id),
    addPhoto:(id,photo)=>axiosInstance.patch(_urls.cars+'/'+id,photo)
}

export {carsService}