import React, {useEffect, useState} from 'react';
import {getService} from "../../services";
import User from "../User/User";

import './Users.css'

const Users = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        getService.getUsers().then(value => setUsers(value.data))
        console.log(users)
    },[])


    return (
        <div className={'users-block'}>
            {users.map((user,index)=><User key={index} user={user}/>)}
        </div>
    );
};

export default Users;