import {Cars, Form} from "../components";
import {useEffect, useState} from "react";
import {carService} from "../services";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {

    const [cars,setCars]=useState([])
    const [prev,setPrev]=useState(null)
    const [next,setNext]=useState(null)
    const [query,setQuery]=useSearchParams({page:'1'})


    useEffect(()=>{
        carService.getAll(query).then(({data})=> {
            setCars(data.data)
            setNext(data.next)
            setPrev(data.prev)
            console.log(data)
        })
    },[query])


    const nextBtn=()=>{
        setQuery(value=>({page:+value.get('page')+1}))
    }
    const prevBtn=()=>{
        setQuery(value=>({page:value.get('page')-1}))
    }


    return (
        <div>
            <Form setCars={setCars}/>
            <hr/>
            <Cars cars={cars} setCars={setCars}/>
            <div>
                <button disabled={!prev} onClick={()=>prevBtn()}>Prev</button>
                <button disabled={!next} onClick={()=>nextBtn()}>Next</button>
            </div>
        </div>
    );
};

export {CarsPage};