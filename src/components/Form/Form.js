import { FormButton, FormCard, FormContainer, Input,ErrorMsg} from "./Form.Styles";
import {useForm} from "react-hook-form";
import {carsService} from "../../services";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {carFormValidator} from "../../validation";
import {joiResolver} from "@hookform/resolvers/joi";
import {CardHeader} from "../LogIn/LogIn.Styles";

const Form = () => {

    const {state: car}=useLocation()

    const {register,handleSubmit,setValue,formState:{errors}}=useForm({resolver:joiResolver(carFormValidator)})

    const navigate=useNavigate()

    const onSubmit=async (data)=>{
        if(car){
            await  carsService.updateCar(car.id,data)
        }else{
            await carsService.addCar(data)
        }

        navigate('/cars')
    }

    useEffect(()=>{
        if(car){
            setValue('model',car.model)
            setValue('price',car.price)
            setValue('year',car.year)
        }
    },[car,setValue])

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormCard>
                    <CardHeader>{car?'Update car':'Create new car'}</CardHeader>
                    {errors.model?.message&&<ErrorMsg>{errors.model?.message}</ErrorMsg>}
                    <Input type={'text'} placeholder={'Input Model:'} {...register('model')}/>
                    {errors.price?.message&&<ErrorMsg>{errors.price?.message}</ErrorMsg>}
                    <Input type={'text'} placeholder={'Input Price:'} {...register('price')}/>
                    {errors.year?.message&&<ErrorMsg>{errors.year?.message}</ErrorMsg>}
                    <Input type={'text'} placeholder={'Input Year:'} {...register('year')}/>
                    <FormButton>Send</FormButton>
                </FormCard>
            </form>
        </FormContainer>
    );
};

export {Form};