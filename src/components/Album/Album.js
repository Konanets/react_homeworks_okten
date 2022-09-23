import React from 'react';

const Album = ({album}) => {
    return (
        <div>
            {JSON.stringify(album)}
        </div>
    );
};

export {Album};