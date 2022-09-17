import logo from './logo.svg';
import './App.css';
import Users from "./components/Users/Users";
import {userService} from "./services";
import {useState} from "react";
import Posts from "./components/Posts/Posts";

function App() {

    let [posts,setPosts]=useState([])

    const getPostsById=(id)=>{
        userService.getCurrentUserPosts(id).then(({data}) => setPosts(data))
    }


  return (
    <div className="App">
        <Users getPostsById={getPostsById}/>
        {posts && <Posts posts={posts}/>}
    </div>
  );
}

export default App;
