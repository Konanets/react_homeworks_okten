import React, {useEffect, useState} from 'react';
import {UserForm} from "../UserForm/UserForm";
import {Container} from "@mui/material";
import {userService} from "../../services";
import {User} from "../User/User";

const Users = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        userService.getUsers().then(({data}) => setUsers(data))
    },[])



    return (
        <Container>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Container>
                {users.map(user=><User key={user.id} user={user}/>)}
            </Container>
        </Container>
    );
};

export {Users};