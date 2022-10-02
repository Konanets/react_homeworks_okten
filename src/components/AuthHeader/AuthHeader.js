import {useNavigate} from "react-router-dom";
import {Header, HeaderButton, HeaderLogo} from "./AuthHeader.Styles";


const AuthHeader = () => {

    const navigate=useNavigate()

    return (
        <Header>
            <HeaderLogo>Cars Project</HeaderLogo>
            <div>
                <HeaderButton onClick={()=>navigate('/login')}>Login</HeaderButton>
                <HeaderButton  onClick={()=>navigate('/registration')}>Register</HeaderButton>
            </div>
        </Header>
    );
};

export {AuthHeader};