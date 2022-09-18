import {axiosInstance} from "./axios.service";
import {_urls} from "../configs";


const carsService = {
    getCars: () => axiosInstance.get(_urls.cars),
    updateCar: (id, car) => axiosInstance.put(_urls.cars+'/'+id,car),
    deleteCar: (id)=>axiosInstance.delete(_urls.cars+'/'+id),
    addCar: (car)=>axiosInstance.post(_urls.cars,car)
}


export {carsService}