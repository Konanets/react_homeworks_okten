import {Navigate} from "react-router-dom";

import {useAuth} from "../hooks";

const RequiredAuth = ({ignore=false, children}) => {


     const {user} = useAuth()
    if(user && ignore){
        return <Navigate to={'/cars'}/>
    }
    
    return children
};

export {RequiredAuth};