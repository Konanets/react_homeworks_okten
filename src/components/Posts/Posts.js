import {useEffect, useState} from "react";

import {getService} from "../../services";
import {Post} from "../post/Post";

const Posts = ({userId}) => {
    let [posts,setPosts]=useState([])

    useEffect(()=>{
        getService.getPosts(userId).then(({data}) => setPosts(data))
    },[userId])


    return (
        <div>
            {posts.map((post,index)=><Post key={index} post={post}/>)}

        </div>
    );
};

export {Posts};