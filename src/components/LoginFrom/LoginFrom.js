import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {authActions} from "../../slices";
import {getAuth} from "../../selectors";

const LoginFrom = () => {

    const dispatch = useDispatch()

    const {register, handleSubmit} = useForm()

    const {error}=useSelector(getAuth)

    const onSubmit = (data) => {
        dispatch(authActions.login({user:data}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                username<input type={'text'} placeholder={'Input username'} {...register('username')}/>
                password<input type={'text'} placeholder={'Input password'} {...register('password')}/>
                <button>Send</button>
            </form>
            {error&&<h1>{error}</h1>}
        </div>
    );
};

export {LoginFrom};