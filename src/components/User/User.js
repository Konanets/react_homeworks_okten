const User = ({user:{name,id},setPostsById}) => {
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={()=>setPostsById(id)}>Click me</button>
        </div>
    );
};

export default User;