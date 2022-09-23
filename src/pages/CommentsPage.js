import React, {useEffect, useState} from 'react';
import {getService} from "../services/jsonPlaceHolder.service";
import {Comments} from "../components";

const CommentsPage = () => {

    const [comments,setComments]=useState([])

    useEffect(()=>{
        getService.getComments().then(({data})=>setComments(data))
    },[])

    return (
        <div>
            {comments.map(comment=><Comments key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};