import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsActions} from "../../store";

const CarForm = () => {

    const {carOnUpdate} = useSelector(state => state.carsReducer)

    const {register, handleSubmit, setValue,reset} = useForm()

    useEffect(() => {
        if (carOnUpdate) {
            setValue('model', carOnUpdate.model)
            setValue('price', carOnUpdate.price)
            setValue('year', carOnUpdate.year)
        }
    }, [carOnUpdate, setValue])

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        if (carOnUpdate) {
            dispatch(carsActions.updateCar({id:carOnUpdate.id,car:data}))
        }else{
            dispatch(carsActions.addCar({car:data}))
        }
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                Model= <input type={'text'} placeholder={'Model'} {...register('model')}/>
                Price= <input type={'text'} placeholder={'Price'} {...register('price')}/>
                Year = <input type={'text'} placeholder={'Year'} {...register('year')}/>
                <button>{carOnUpdate ? 'Update' : 'Submit'}</button>
            </form>
        </div>
    );
};

export {CarForm};