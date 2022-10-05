import {useDispatch, useSelector} from "react-redux";
import {User} from "./User";
import {useEffect} from "react";
import {getService} from "../../services";
import {usersActions} from "../../store";

const Users = () => {


    const state=useSelector(state => state.usersReducer)

    const dispatch=useDispatch()

    useEffect(()=>{
        getService.getUsers().then(({data})=>{
            dispatch({type: usersActions.SET_USERS,payload:data})
        })
    },[])
    return (
        <div>
            {state.users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};