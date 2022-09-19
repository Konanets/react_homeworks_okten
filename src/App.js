import './App.css';
import {Posts, UserDetailInfo, Users} from "./components";
import {useState} from "react";

function App() {

    const [userId,setUserId]=useState(null)
    const [showPosts,setShowPosts]=useState(false)

    const togglePosts=()=>{
        setShowPosts(!showPosts);
    }

  return (
    <div className="App">
        <Users setUserId={setUserId}/>
        <UserDetailInfo userId={userId} togglePosts={togglePosts}/>
        {showPosts&&<Posts userId={userId}/>}

    </div>
  );
}

export default App;
