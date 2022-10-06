import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "../../store";
import {User} from "../User/User";

const Users = () => {


    const {users}=useSelector(state => state.userReducer)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(userActions.addUsers())
    },[dispatch])

    return (
        <div>
            {users.map((user)=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};