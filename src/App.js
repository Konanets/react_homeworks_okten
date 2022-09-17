import {useState} from "react";

import './App.css';

import {userService} from "./services";
import {Posts, Users} from "./components";




function App() {

    let [posts,setPosts]=useState([])

    const getPostsById=(id)=>{
        userService.getCurrentUserPosts(id).then(({data}) => setPosts(data))
    }


  return (
    <div className="App">
        <Users getPostsById={getPostsById}></Users>
        {posts && <Posts posts={posts}/>}
    </div>
  );
}

export default App;
