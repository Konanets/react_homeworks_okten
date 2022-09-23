import React from 'react';

const Todo = ({todo}) => {
    return (
        <div>
            {JSON.stringify(todo)}
        </div>
    );
};

export {Todo};