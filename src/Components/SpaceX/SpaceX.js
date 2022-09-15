import React, {useEffect, useState} from 'react';
import {getLaunchesFiltered} from "../../Services/spacex.api";
import Launch from "./Launch/Launch";

const SpaceX = () => {

    let [launches,setLaunches]=useState([])

    useEffect(()=>{
        getLaunchesFiltered().then(value => setLaunches(value))
    },[])

    const launchersStyle={
        display:'flex',
        flexWrap:"wrap",
        justifyContent:'center'
    }
    return (
        <div style={launchersStyle}>
            {launches.filter(({launch_year})=>launch_year!=="2006").map((launch,index)=><Launch launch={launch} key={index}/>)}
        </div>
    );
};

export default SpaceX;