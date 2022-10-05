import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getService} from "../../services";
import {postsActions, postsReducer} from "../../store";
import {User} from "../Users/User";
import {Post} from "./Post";

const Posts = () => {

    const state=useSelector(state => state.postsReducer)

    const dispatch=useDispatch()

    useEffect(()=>{
        getService.getPosts().then(({data})=>{
            dispatch({type: postsActions.SET_POSTS,payload:data})
        })
    },[])
    return (
        <div>
            {state.posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};