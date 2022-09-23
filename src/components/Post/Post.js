import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    );
};

export default Post;