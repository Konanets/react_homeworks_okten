import {useAuth} from "../hooks";
import {Navigate, useLocation} from "react-router-dom";

const RequiredAuth = ({ignore=false, children}) => {


     const {user} = useAuth()
    if(user && ignore){
        return <Navigate to={'/cars'}/>
    }else if(user && !ignore){
        return children
    }else if(!user && ignore) {
        return children
    }
    
    return children
};

export {RequiredAuth};