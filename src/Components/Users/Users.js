import React, {useEffect, useState} from 'react';
import UserInformation from "./UserInformation/UserInformation";
import {getUsers} from "../../Services/user.service";
import User from "./User/User";
import {logDOM} from "@testing-library/react";

const Users = () => {


    let [users,setUsers]=useState([])

    let [user,setUser]=useState(null)

    useEffect(()=>{
        getUsers().then(value=>setUsers(value))


    },[])
    const onClick=(user)=>setUser(user)


    return (
        <div>
            {user&&<UserInformation user={user}/>}
            {users.map((user,index)=><User key={index} user={user} onClick={onClick}/>)}
        </div>
    );
};

export default Users;