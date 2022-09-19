import React from 'react';

import './User.css'

const User = ({user:{name,id},setUserId}) => {



    return (
        <div className={'user-block'}>
            <p>{name}-{id}</p>
            <button onClick={()=>{setUserId(id)}}>Get Details</button>
        </div>
    );
};

export {User};