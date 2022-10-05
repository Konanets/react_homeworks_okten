import {useNavigate} from "react-router-dom";

const User = ({user}) => {

    const navigate = useNavigate()

    const onClick = () => {
        navigate(user.id.toString())
    }

    return (
        <div>
            {JSON.stringify(user)}
            <button onClick={() => onClick()}>User Details</button>
        </div>
    );
};

export {User};