import {axiosInstance} from "./axios.service";
import {_urls} from "../configs/urls";


const carsService = {
    getAll: (page = 1) => axiosInstance.get(_urls.cars, {params: {page}}),
    addCar: (car) => axiosInstance.post(_urls.cars, car),
    addPhoto: (id, photo) => axiosInstance.patch(_urls.cars + '/' + id, photo),
    deleteCar:(id)=>axiosInstance.delete(_urls.cars+'/'+id),
    updateCar:(id,newCar)=>axiosInstance.put(_urls.cars+'/'+id,newCar),
}

export {carsService}