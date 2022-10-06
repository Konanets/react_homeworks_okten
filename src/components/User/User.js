import {useDispatch} from "react-redux";
import {userActions} from "../../store";

const User = ({user}) => {

    const dispatch=useDispatch()

    const onClick=()=>{
        dispatch(userActions.addUser({id:user.id}))
    }

    return (
        <div>
            {JSON.stringify(user)}
            <button onClick={onClick}>Details</button>
        </div>
    );
};

export {User};