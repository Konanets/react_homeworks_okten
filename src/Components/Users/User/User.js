import React from 'react';

import './User.css'

const User = (props) => {

    const {user,user:{id,name},onClick}=props

    return (
        <div className={'user-block'}>
            <div> Id: {id} Name: {name}</div>
            <button onClick={()=>onClick(user)}>Check</button>
        </div>
    );
};

export default User;