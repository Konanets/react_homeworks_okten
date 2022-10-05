import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postsActions} from "../../store";

const PostsDetail = () => {

    const {id}=useParams()

    const dispatch=useDispatch()



    useEffect(()=>{
        dispatch({type:postsActions.SET_POST,payload:+id})
    },[id,dispatch])


    const {post}=useSelector(state => state.postsReducer)


    return (
        <div>
            {post?JSON.stringify(post):<h1>Error</h1>}
        </div>
    );
};

export {PostsDetail};