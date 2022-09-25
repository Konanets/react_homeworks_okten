import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Container} from "@mui/system";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant={"h3"}>CARS</Typography>
                        <Button component={Link} to={'/'} sx={{color:'white',textAlign:6}}>Home</Button>
                        <Button component={Link} to={'/newCar'} sx={{color:'white',textAlign:6}}>Add new car</Button>
                </Toolbar>

            </Container>

        </AppBar>
    );
};

export {Header};