import {useDispatch, useSelector} from "react-redux";

import {getAuth} from "../selectors";
import {Navigate, Outlet} from "react-router-dom";
import {authService} from "../services";
import {authActions} from "../slices";

const PrivateRoute = () => {

    const {isAuthenticated}=useSelector(getAuth)

    const dispatch=useDispatch()

    if(!authService.getRefresh()||!authService.getAccess()){
        dispatch(authActions.reloadLogin(false))
    }

    return (
        <>
            {isAuthenticated?<Outlet/>:<Navigate to={'/login'}/>}
        </>
    );
};

export {PrivateRoute};