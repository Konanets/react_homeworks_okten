import React from 'react';

const Launch = ({launch}) => {

    const img={
        width:'100px',
        height: '100px'
    }

    const launchStyles={
        width: '150px',
        height: '150px'
    }
    return (
        <div  style={launchStyles}>
            <div>{launch.mission_name}-{launch.launch_year}</div>
            <img style={img} src={launch.links.mission_patch_small} alt=""/>
        </div>
    );
};

export default Launch;