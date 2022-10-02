import {Cars} from "../../components";
import {useEffect, useState} from "react";
import {carsService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {CarsPageContainer, NavButton, NavigationContainer} from "./CarsPage.Style";

const CarsPage = () => {

    const [query,setQuery]=useSearchParams({page:'1'})
    const [prev,setPrev]=useState(null)
    const [next,setNext]=useState(null)

    const [cars,setCars]=useState([])

    useEffect(()=>{
        console.log(query.get('page'))
        carsService.getAll(query.get('page')).then(({data:res})=>{
            console.log(res)
            setCars(res.data)
            setNext(res.next)
            setPrev(res.prev)
        })
    },[query])

    const nextPage=()=>{
        setQuery(value=>({page:+value.get('page')+1}))
    }
    const prevPage=()=>{
        setQuery(value=>({page:value.get('page')-1}))
    }

    return (
        <CarsPageContainer>
            <Cars cars={cars} setCars={setCars}/>
            <NavigationContainer>
                <NavButton disabled={!prev&&true} onClick={prevPage}>Prev</NavButton>
                <NavButton disabled={!next&&true} onClick={nextPage}>Next</NavButton>
            </NavigationContainer>
        </CarsPageContainer>
    );
};

export {CarsPage};