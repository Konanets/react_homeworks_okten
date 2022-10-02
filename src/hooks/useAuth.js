import {useContext} from "react";
import {authContext} from "../hoc/authProvider";


const useAuth=()=>useContext(authContext)

export {useAuth}