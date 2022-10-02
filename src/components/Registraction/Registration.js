import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks";
import {authService} from "../../services";
import {useForm} from "react-hook-form";
import {CardHeader, FormButton, FormCard, FormContainer, Input} from "./Registration.Styles";

const Registration = () => {

    const navigate=useNavigate()

    const onSubmit = async (data) => {
        try {
            await authService.registration(data)
            navigate('/login')
        }catch (e) {
            console.log(e)
        }
    }


    const {register, handleSubmit} = useForm()

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormCard>
                    <CardHeader>New User</CardHeader>
                    <Input type={'text'} placeholder={'Input User name:'} {...register('username')}/>
                    <Input type={'text'} placeholder={'Input User name:'} {...register('password')}/>
                    <FormButton>Registrate</FormButton>
                </FormCard>
            </form>
        </FormContainer>
    );
};

export {Registration};