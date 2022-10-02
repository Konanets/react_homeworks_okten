import {BtnContainer, CarButton, Card, CardBody, CardHeader, CustomInput} from "./Car.Styled";
import {carsService} from "../../services";
import {Navigate, useNavigate} from "react-router-dom";

const Car = ({car,setCars}) => {

    const navigate=useNavigate()

    const onChange= async (e)=>{
        const formData=new FormData()
        const [file]=e.target.files
        formData.append('photo',file)
        await carsService.addPhoto(car.id,formData)
        navigate(0)
    }

    const deleteCar=async ()=>{
        await carsService.deleteCar(car.id)
        navigate(0)
    }

    const onUpdate=()=>{
        navigate('/update',{state:car})
    }

    return (
        <Card>
            <CardHeader src={car.photo?car.photo:'https://mascdn.militaryautosource.com/website-images/generic-sedan-silo.jpg'} alt={car.model}/>
            <CardBody>
                <h1>{car.id}-{car.model}</h1>
                <h3>Price: {car.price}</h3>
                <h3>Year: {car.year}</h3>
                <BtnContainer>
                    <CarButton onClick={onUpdate}>Update</CarButton>
                    <CarButton onClick={deleteCar}>Delete</CarButton>
                    <CustomInput onChange={onChange} type={"file"} placeholder={'Update Photo'} title={""}  />
                </BtnContainer>
            </CardBody>
        </Card>
    );
};

export {Car};