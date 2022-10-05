import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getService} from "../../services";
import {commentsActions} from "../../store";

const Comments = () => {

    const {comments}=useSelector(state => state.commentsReducer)

    const dispatch=useDispatch()


    useEffect(()=>{
        getService.getComments().then(({data})=>{
            dispatch({type: commentsActions.SET_COMMENTS,payload:data})
        })
    },[dispatch])


    return (
        <div>
            {JSON.stringify(comments)}
        </div>
    );
};

export {Comments};