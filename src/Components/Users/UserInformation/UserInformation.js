import React from 'react';

const UserInformation = ({user}) => {
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default UserInformation;