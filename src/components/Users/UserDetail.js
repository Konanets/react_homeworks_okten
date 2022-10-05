import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {usersActions, usersReducer} from "../../store";
import {getService} from "../../services";

const UserDetail = () => {

    const {user} = useSelector(state => state.usersReducer)
    const dispatch = useDispatch();

    const {id}=useParams()



    useEffect(()=>{
        getService.getUser(id).then(({data})=>{
            dispatch({type:usersActions.SET_USER,payload: data})
        })
    },[id])

    return (
        <div>
            {user?JSON.stringify(user):<h1>Error</h1>}
        </div>
    );
};

export {UserDetail};