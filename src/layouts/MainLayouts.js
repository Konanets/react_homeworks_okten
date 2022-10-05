import {Outlet} from "react-router-dom";
import {Header} from "../components";

const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};