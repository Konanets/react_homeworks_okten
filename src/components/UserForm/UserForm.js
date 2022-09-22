import React from 'react';
import {FormGroup, TextField, Typography, Container, Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {userService} from "../../services";

const UserForm = ({setUsers}) => {

    const {register,handleSubmit,formState:{errors},reset}=useForm()

    const onSubmit= async (newUser)=>{

        try {
            const {data}=await userService.postUser(newUser)
            setUsers(users=>[...users,data])

        }catch (e){
            console.log('pomylka')
        }
        reset()

    }

    return (
        <form onSubmit={handleSubmit((data)=>onSubmit(data))}>
            <Typography variant={"h1"}>User Form</Typography>
            <Container sx={{display:'flex', justifyContent:'space-evenly'}}>
                <TextField focused={true} label={'name'} {...register('name')}></TextField>
                <TextField focused={true} label={'username'} {...register('username')}></TextField>
                <TextField focused={true} label={"email"} {...register('email')}></TextField>
            </Container>
            <Container sx={{display:'flex', flexWrap:'wrap'}}>
                <Button type={"submit"} fullWidth={true} variant={"contained"} sx={{mt:2}}>Create</Button>
            </Container>

        </form>
    );
};

export {UserForm};