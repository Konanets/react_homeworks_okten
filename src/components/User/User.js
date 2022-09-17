import React from 'react';

const User = ({user:{name,id},getPostsById}) => {
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={()=>getPostsById(id)}>Click me</button>
        </div>
    );
};

export default User;