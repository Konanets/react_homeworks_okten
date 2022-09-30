import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div style={{height:50,background:'lightblue',display:'flex',justifyContent:'space-evenly'}}>
          <Link to={'/'}>Home</Link>
          <Link to={'/users'}>users</Link>
          <Link to={'/posts'}>posts</Link>
          <Link to={'/comments'}>comments</Link>
          <Link to={'/todos'}>todos</Link>
        </div>
    );
};

export {Header};