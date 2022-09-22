import React from 'react';
import {CardContent,Typography} from "@mui/material";

const User = ({user:{name,username,email}}) => {
    return (
        <CardContent sx={{bgcolor:'red', minWidth:250, mt:5, mr:3}}>
            <Typography>name: {name}</Typography>
            <Typography>username: {username}</Typography>
            <Typography>email: {email}</Typography>
        </CardContent>
    );
};

export {User};