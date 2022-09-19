import React from 'react';

const User = ({user:{name,id}}) => {
    return (
        <div>
            <p>{name}-{id}</p>
            <button>Get Details</button>
        </div>
    );
};

export default User;