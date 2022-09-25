import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {carsService} from "../../services";
import {Link} from "react-router-dom";

const CarBox = ({car}) => {

    const deleteCar=async (id)=>{
        console.log(6346)
        await carsService.carDel(id)
    }

    return (
        <Card sx={{maxWidth: 345,mt:3}}>
            <CardMedia component={"img"} height={"140"} src={'https://a.storyblok.com/f/133899/1920x902/61e6c32555/220602-website-roll-animation-1080p024.jpg'}/>
            <CardContent>
                <Typography variant={"h5"}>{car.id}-{car.model}</Typography>
                <Typography variant={"body2"}>Car year {car.year}</Typography>
                <Typography variant={"body2"}>Car price {car.price}</Typography>
            </CardContent>
            <CardActions>
                <Button  component={Link} to={'/update'} state={{...car}} size="small">Upgrade</Button>
                <Button size="small" onClick={()=>deleteCar(car.id)}>Delete</Button>
            </CardActions>
        </Card>
    );
};

export {CarBox};