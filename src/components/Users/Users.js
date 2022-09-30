import {useEffect, useState} from "react";
import {getService} from "../../services";
import {User} from "./User";

const Users = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        getService.getUsers().then(({data})=>setUsers(data))
    },[])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};