import {useDispatch} from "react-redux";

import {carsActions} from "../../store";

const Car = ({car}) => {

    const dispatch =useDispatch()

    const updateCar=()=>{
        dispatch(carsActions.setOnUpdate(car))
    }

    const deleteCar=()=>{
        dispatch(carsActions.deleteCar({id:car.id}))
    }

    return (
        <div style={{display:'flex', justifyContent:'space-evenly', border:'1px solid black'}}>
            <p>model={car.model}</p>
            <p>price={car.price}</p>
            <p>year={car.year}</p>
            <button onClick={updateCar}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};