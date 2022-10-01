import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const Registration = () => {

    const {register,handleSubmit}=useForm()

    const navigate = useNavigate()

    const onSubmit= async (data)=>{
        console.log(data)
        try {
            await authService.registration(data)
            navigate('/login')
        }catch (e) {
            console.log(e)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'text'} placeholder={'type name'} {...register('username')}/>
                <input type={'text'} placeholder={'type password'} {...register('password')}/>
                <button>Register</button>
            </form>
        </div>
    );
};

export {Registration};