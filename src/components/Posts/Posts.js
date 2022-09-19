import Post from "../Post/Post";
import {useEffect, useState} from "react";
import {userService} from "../../services";

const Posts = ({postsID}) => {
    let [posts,setPosts]=useState([])

    useEffect(()=>{
        userService.getCurrentUserPosts(postsID).then(({data}) => setPosts(data))
    },[postsID])


    return (
        <div>
            {posts.map((post,index)=><Post key={index} post={post}/>)}

        </div>
    );
};

export {Posts};