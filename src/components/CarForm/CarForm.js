import React, {useEffect} from 'react';
import {Button, Container, FormGroup, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carFormValidator} from "../../validators";
import {carService} from "../../services";



const CarForm = ({updateCar,setUpdateCar}) => {

    const {register,handleSubmit,formState:{errors},setValue,reset}=useForm({resolver:joiResolver(carFormValidator),mode:'all'})

    const onSubmit= async (car)=>{
        await carService.postCar(car)
        reset()
    }

    const onUpdate=async (date)=>{
        try {
        await carService.updateCar(updateCar.id,date)
        }catch (e) {
            console.log('ne robe')
        }
        reset()
        setUpdateCar(null)
    }

    useEffect(()=>{
        if (updateCar) {
            setValue('model',updateCar.model);
            setValue('price',updateCar.price);
            setValue('year',updateCar.year);
        }

    },[updateCar,setValue])

    return (
        <Container sx={{mt:5}}>
            <form onSubmit={handleSubmit((date)=>updateCar?onUpdate(date):onSubmit(date))}>
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
                            {updateCar?'Update':'Submit'}
                        </Button>

                </FormGroup>
            </form>

        </Container>

    );
};

export default CarForm;