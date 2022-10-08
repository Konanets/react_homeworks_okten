import {useDispatch, useSelector} from "react-redux";

import {getAuth} from "../selectors";
import {Navigate, Outlet} from "react-router-dom";
import {authService} from "../services";
import {authActions} from "../slices";

const PublicRoute = () => {

    const {isAuthenticated}=useSelector(getAuth)

    const dispatch=useDispatch()

    if(authService.getRefresh()&&authService.getAccess()){
            dispatch(authActions.reloadLogin(true))
    }

    return (
        <>
            {!isAuthenticated?<Outlet/>:<Navigate to={'/cars'}/>}
        </>
    );
};

export {PublicRoute};