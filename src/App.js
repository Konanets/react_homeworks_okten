import {useState} from "react";

import './App.css';
import {userService} from "./services";
import {Posts, Users} from "./components";


function App() {

    let [postsID, setPostsID] = useState(null)

    const setPostsById = (id) => {
        setPostsID(id)
    }

    return (
        <div className="App">
            <Users setPostsById={setPostsById}></Users>
            {postsID && <Posts postsID={postsID}/>}

        </div>
    );
}

export default App;
