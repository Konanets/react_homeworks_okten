import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../../selectors";
import {useEffect} from "react";
import {carAction} from "../../slices";

const Cars = () => {

    const {cars} = useSelector(getCars)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(carAction.getCars())
    },[dispatch])

    return (
        <div>
            {JSON.stringify(cars)}
        </div>
    );
};

export {Cars};