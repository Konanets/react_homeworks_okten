import {useAuth} from "../../hooks";
import {useRef} from "react";
import { useLocation, useNavigate} from "react-router-dom";

const LogIn = () => {

    const {state}=useLocation()

    const {logIn}=useAuth()

    const name=useRef()

    const navigate=useNavigate()

    const onClick=()=>{
        logIn(name.current.value,()=>navigate(state.pathname,{replace:true}))
    }

    return (
        <div>
            <input type={"text"} ref={name}/>
            <button onClick={()=>onClick()}>send</button>
        </div>
    );
};

export {LogIn};