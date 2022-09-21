import React, {useEffect} from 'react';
import {Button, Container, FormControl, FormGroup, FormHelperText, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carFormValidator} from "../../validators";
import {carService} from "../../services";



const CarForm = ({updateCar,setUpdateCar}) => {

    const {register,handleSubmit,formState:{errors},setValue}=useForm({resolver:joiResolver(carFormValidator),mode:'onTouched'})

    const onSubmit=async (car)=>{
        await carService.postCar(car)
    }

    const onUpdate=async (date)=>{
        try {
            await carService.updateCar(updateCar.id,date)
        }catch (e) {
            console.log('ne robe')
        }

        setUpdateCar({})
    }

    useEffect(()=>{
        if (updateCar) {
            setValue('model',updateCar.model);
            setValue('price',updateCar.price);
            setValue('year',updateCar.year);
        }

    },[updateCar])

    return (
        <Container sx={{mt:5}}>
            <FormGroup row={true} sx={{display:'flex',justifyContent:'space-evenly'}}>
                <div>
                    <TextField focused variant={'filled'} label={'model'} {...register('model')}></TextField>
                    {errors.model&&<FormHelperText>{errors.model.message}</FormHelperText>}
                </div>

                <div>
                    <TextField focused variant={'filled'} label={'price'} {...register('price')}></TextField>
                    {errors.model&&<FormHelperText>{errors.model.message}</FormHelperText>}
                </div>

                <div>
                    <TextField focused variant={'filled'} id={'outlined-number'} label={'year'} {...register('year')}></TextField>
                    {errors.model&&<FormHelperText>{errors.model.message}</FormHelperText>}
                </div>


                <FormControl>
                    {updateCar?
                        <Button variant={"contained"} sx={{width:120,height:55}} onClick={()=>handleSubmit(onUpdate())}>
                            Update
                        </Button>:
                        <Button variant={"contained"} sx={{width:120,height:55}} onClick={()=>handleSubmit(onSubmit)}>
                            Send
                        </Button>
                    }
                </FormControl>
            </FormGroup>
        </Container>

    );
};

export default CarForm;