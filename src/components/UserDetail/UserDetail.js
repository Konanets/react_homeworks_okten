import {useSelector} from "react-redux";

const UserDetail = () => {

    const {user}=useSelector(state => state.userReducer)


    return (
        <div>
            {user&&JSON.stringify(user)}
        </div>
    );
};

export {UserDetail};