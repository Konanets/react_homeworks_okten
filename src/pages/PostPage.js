import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {getService} from "../services/jsonPlaceHolder.service";
import {Post} from "../components";



const PostPage = () => {

    const {id}=useParams()

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        getService.getPostsById(id).then(({data})=>setPosts([{...data}]))
    },[id])

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostPage};