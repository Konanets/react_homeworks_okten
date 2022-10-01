import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const {register,handleSubmit}=useForm()

    const navigate = useNavigate()

    const onSubmit=async (data)=>{
        try {
            let response=await authService.login(data)
            await authService.setTokens(response.data)
            navigate('/cars')
        }catch (e) {
            console.log(e)
        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'text'} placeholder={'type name'} {...register('username')}/>
                <input type={'password'} placeholder={'type password'} {...register('password')}/>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export {Login};