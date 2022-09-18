import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {carsActions} from "../../store";

const Cars = () => {

    const {cars} = useSelector(state => state.carsReducer)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(carsActions.getCars())
    },[dispatch])

    return (
        <div style={{width:'550px'}}>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};