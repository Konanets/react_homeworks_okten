import {useForm} from "react-hook-form";
import {CardHeader, FormButton, FormCard, FormContainer, Input} from "./LogIn.Styles";
import {authService} from "../../services";
import {useAuth} from "../../hooks";
import {useNavigate} from "react-router-dom";


const LogIn = () => {


    const {logIn}=useAuth()

    const navigate=useNavigate()

    const onSubmit = async (data) => {
        try {
            const res=await authService.login(data)
            authService.saveTokens(res.data)
            logIn(data,()=>navigate('/cars',{replace: true}))
        }catch (e) {
            console.log(e)
        }
    }


    const {register, handleSubmit} = useForm()

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormCard>
                    <CardHeader>Cars Project</CardHeader>
                    <Input type={'text'} placeholder={'Input User name:'} {...register('username')}/>
                    <Input type={'text'} placeholder={'Input User name:'} {...register('password')}/>
                    <FormButton>Send</FormButton>
                </FormCard>
            </form>
        </FormContainer>
    );
};

export {LogIn};