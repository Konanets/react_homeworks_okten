import React from 'react';
import {Link} from "react-router-dom";

const Comments = ({comment}) => {
    return (
        <div>
            <div>
               {JSON.stringify(comment)}
            </div>
            <Link to={comment.postId.toString()}>Post info</Link>
        </div>
    );
};

export {Comments};