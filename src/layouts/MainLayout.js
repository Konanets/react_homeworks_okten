import {Outlet} from "react-router-dom";
import {MainHeader} from "../components";

const MainLayout = () => {
    return (
        <div>
            <MainHeader/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};