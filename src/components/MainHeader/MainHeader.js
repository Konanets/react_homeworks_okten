import {Header, HeaderContentContainer, Navigate} from "./MainHeader.Styles";
import {HeaderButton, HeaderLogo} from "../AuthHeader/AuthHeader.Styles";
import {Link, useNavigate} from "react-router-dom";

const MainHeader = () => {

    const navigate=useNavigate()

    return (
        <Header>
            <HeaderContentContainer>
                <HeaderLogo>Cars Project</HeaderLogo>

                <Navigate to={'/cars'}>Cars</Navigate>
                <Navigate to={'/new'}>Add Car</Navigate>
            </HeaderContentContainer>

            <div>
                <HeaderButton onClick={()=>navigate('/logout')}>LogOut</HeaderButton>
            </div>
        </Header>
    );
};

export {MainHeader};