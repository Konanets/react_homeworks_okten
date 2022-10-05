import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header-container'}>
            <Link className={'header-link'} to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
        </header>
    );
};

export {Header};