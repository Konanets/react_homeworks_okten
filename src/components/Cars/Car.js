import {carService} from "../../services";

const Car = ({car,setCars}) => {

    const {id, price,model,year,photo}=car

    const getPhoto= async (e)=>{
        const formData = new FormData()
        formData.append('photo',e.target.files[0])
        const {data}=await carService.addCarPhoto(id,formData)
        setCars(cars=>{
            let current_car=cars.find(car=>car.id===id)
            Object.assign(current_car,{...data, photo: URL.createObjectURL(e.target.files[0])})
            return cars
        })
    }

    return (
        <div>
            <p>id:{id}</p>
            <p>price:{price}</p>
            <p>model:{model}</p>
            <p>year:{year}</p>
            {photo?<img style={{height:300,width:450}} src={photo} alt={model}/>:
            <input type={"file"} onChange={getPhoto}/>
            }

        </div>
    );
};

export {Car};