import {useEffect, useState} from "react";

import {getService} from "../../services";
import {Post} from "../post/Post";
import './Posts.css'

const Posts = ({userId}) => {
    let [posts,setPosts]=useState([])

    useEffect(()=>{
        getService.getPosts(userId).then(({data}) => setPosts(data))
    },[userId])


    return (
        <div className={'posts-block'}>
            {posts.map((post)=><Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};