import {useAuth} from "../../hooks";
import {Navigate, useNavigate, useSearchParams} from "react-router-dom";
import {authService} from "../../services";

const LogOut = () => {
    const [mustLogOut,]=useSearchParams()
    const flag=mustLogOut.has('must')

    const {logOut}=useAuth()

    const navigate=useNavigate()

    const onClickYes=()=>{
        authService.removeTokens()
        logOut(()=>navigate('/login'))
    }

    const onClickNo=()=>{
        if(!flag)navigate(-1)
    }

    if(flag){
        onClickYes()
    }

    return (
            <div>
                Do you really want to logout ?
                <button onClick={onClickYes}>Yes i want beach</button>
                <button onClick={onClickNo}>No I love it</button>
                {flag&&<Navigate to={'/login'}/>}
            </div>


    );
};

export {LogOut};