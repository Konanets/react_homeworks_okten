import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const navigate=useNavigate()

    const onClick=()=>{
        navigate(post.id.toString())
    }

    return (
        <div>
            {JSON.stringify(post)}
            <button onClick={()=>onClick()}>DEtail</button>
        </div>
    );
};

export {Post};