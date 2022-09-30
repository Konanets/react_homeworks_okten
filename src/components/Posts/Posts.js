import {useEffect, useState} from "react";
import {getService} from "../../services";
import {Post} from "./post";

const Posts = () => {

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        getService.getPosts().then(({data})=>setPosts(data))
    },[])

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};