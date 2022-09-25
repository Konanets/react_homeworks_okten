import React, {useEffect, useState} from 'react';
import {carsService} from "../services";
import {Container} from "@mui/material";
import {CarBox} from "../components";

const CarsPage = () => {

    const [cars,setCars]=useState([])

    useEffect(()=>{
        carsService.getCars().then(({data})=>setCars(data))
    },[cars])

    return (
        <Container maxWidth={"xl"}  sx={{display:'flex', flexWrap:'wrap',justifyContent: 'space-evenly'}}>
            {cars.map(car=><CarBox key={car.id} car={car}/>)}
        </Container>
    );
};

export {CarsPage};