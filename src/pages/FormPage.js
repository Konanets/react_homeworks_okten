import React, {useEffect} from 'react';
import {Button, FormGroup, TextField} from "@mui/material";
import {Container} from "@mui/system";
import {useForm} from "react-hook-form";
import {carsService} from "../services";
import {useLocation} from "react-router-dom";
import {carFormValidator} from "../validators";
import {joiResolver} from "@hookform/resolvers/joi";

const FormPage = () => {

    let {state:car}=useLocation()

    const {register,handleSubmit,formState:{errors},setValue,reset}=useForm({mode:'all',resolver:joiResolver(carFormValidator)})

    const onSubmit=async (newCar)=>{
        if(car){
            await carsService.carUpdate(car.id,newCar)
            car=null
        }else{
            await carsService.postCar(newCar)
        }
        reset()
    }

    useEffect(()=>{
        if(car){
            setValue('model',car.model)
            setValue('price',car.price)
            setValue('year',car.year)
        }
    },[car,setValue])

    return (
        <Container sx={{mt:5}}>
            <form onSubmit={handleSubmit((data)=>onSubmit(data))}>
                <FormGroup row={true} sx={{display:'flex',justifyContent:'space-evenly'}}>
                    <div>
                        <TextField helperText={errors.model?.message} focused variant={'filled'} label={'model'} {...register('model')}></TextField>
                    </div>

                    <div>
                        <TextField helperText={errors.price?.message}  focused variant={'filled'} label={'price'} {...register('price')}></TextField>
                    </div>

                    <div>
                        <TextField helperText={errors.year?.message} focused variant={'filled'} id={'outlined-number'} label={'year'} {...register('year')}></TextField>

                    </div>
                    <Button type={"submit"} variant={"contained"} sx={{width:120,height:55}} >
                            {car?'Update':'Send'}
                    </Button>

                </FormGroup>
            </form>

        </Container>
    );
};

export {FormPage};