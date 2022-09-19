import React, {useEffect, useState} from 'react';

import {getService} from "../../services";
import './UserDetailInfo.css'

const UserDetailInfo = ({userId,togglePosts}) => {

    let [userInfo,setUserInfo]=useState(null)

    useEffect(()=>{
        if(userId)getService.getUser(userId).then(({data}) => setUserInfo(data))
    },[userId])

    return (
        <div className={"user-details-block"}>
            <h1>DETAIL INFO</h1>
            {userInfo&&<div>
                <p>{JSON.stringify(userInfo)}</p>
                <button onClick={()=>togglePosts()}>Show</button>
            </div>}

        </div>
    );
};

export {UserDetailInfo};