import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate=useNavigate()

    return (
        <header style={{
            height:'70px',
            backgroundColor:'lightblue',
            display:'flex',
            justifyContent:'space-between'
        }}>
            <div>
                <button onClick={()=>navigate('/login')}>Login</button>
                <button onClick={()=>navigate('/registration')}>Registration</button>
            </div>
        </header>
    );
};

export {Header};