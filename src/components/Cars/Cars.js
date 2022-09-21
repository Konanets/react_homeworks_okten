import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Container} from "@mui/material";

import {Car} from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {

    const [cars,setCars]=useState([])
    const [updateCar,setUpdateCar]=useState(null)


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