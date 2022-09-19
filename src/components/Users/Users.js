import React, {useEffect, useState} from 'react';

import {getService} from "../../services";
import './Users.css'
import {User} from "../User/User";

const Users = ({setUserId}) => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        getService.getUsers().then(value => setUsers(value.data))
        console.log(users)
    },[])


    return (
        <div className={'users-block'}>
            {users.map((user,index)=><User key={index} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};