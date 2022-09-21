import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {carService} from "../../services";

const Car = ({car,car:{id,model,price,year},setUpdateCar}) => {

    const deleteCar=async (id)=>{
        try {
            await carService.deleteCar(id)
        }catch (err){
            console.log('ja pierdole')
        }

    }

    const Update=()=>{
        setUpdateCar(car)
    }

    return (
        <Card sx={{bgcolor:'light', minWidth:250, mt:5, mr:3}}>
            <CardContent>
                <Typography>id: {id}</Typography>
                <Typography>model: {model}</Typography>
                <Typography>price: {price}</Typography>
                <Typography>year: {year}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={()=>Update()}>Update</Button>
                <Button onClick={()=>deleteCar(id)}>Delite</Button>
            </CardActions>
        </Card>

    );
};

export {Car};