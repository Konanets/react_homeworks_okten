import React, {useEffect, useState} from 'react';
import CarForm from "../CarForm/CarForm";
import {carService} from "../../services";
import {Car} from "../Car/Car";
import {Container} from "@mui/material";

const Cars = () => {

    const [cars,setCars]=useState([])
    const [updateCar,setUpdateCar]=useState({})


    useEffect(()=>{
        carService.getCars().then(({data}) => setCars(data))
    },[cars])

    return (
        <Container>
            <CarForm setCars={setCars} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            <Container sx={{display:'flex', flexWrap:'wrap'}}>
                    {cars.map(car=><Car key={car.id} car={car} setUpdateCar={setUpdateCar}/>)}
            </Container>

        </Container>

    );
};

export {Cars};