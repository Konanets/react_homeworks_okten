const Post = ({post:{body,title}}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export {Post};