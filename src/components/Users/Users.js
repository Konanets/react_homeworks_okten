import {useEffect, useState} from 'react';

import {userService} from "../../services";

import User from "../User/User";

const Users = ({setPostsById}) => {

    let [users,setUsers]=useState([]);

    useEffect(()=>{
        userService.getAllUsers().then(({data}) => setUsers(data))
    },[])


    return (
        <div>
            {users.length?users.map((user,index)=><User key={index} user={user} setPostsById={setPostsById}/>):<h1>Loading....</h1>}
        </div>
    );
};

export {Users};

//Отримати всіх користувачів з jsonplaceholder, вивести їх.
// Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси