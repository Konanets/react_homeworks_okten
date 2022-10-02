import {AuthHeader} from "../components";
import {Outlet} from "react-router-dom";

const AuthorizationLayout = () => {
    return (
        <div>
            <AuthHeader/>
            <Outlet/>
        </div>
    );
};

export {AuthorizationLayout};