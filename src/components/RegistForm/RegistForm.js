import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {getAuth} from "../../selectors";
import {joiResolver} from "@hookform/resolvers/joi";

import {registrationValidation} from "../../validation";
import {authActions} from "../../slices";

const RegistrationForm = () => {

    const {error}=useSelector(getAuth)

    const {register, handleSubmit,formState:{errors}} = useForm({resolver:joiResolver(registrationValidation)})

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(authActions.registration({user: data}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                username<input type={'text'} placeholder={'Input username'} {...register('username')}/>
                password<input type={'text'} placeholder={'Input password'} {...register('password')}/>
                <button>Send</button>
            </form>
            {errors.username?.message.length&&<h3>invalid username</h3>} {errors.password?.message.length&&<h3>invalid password</h3>}
            {error&&<h1>{error}</h1>}
        </div>
    );
};

export {RegistrationForm};