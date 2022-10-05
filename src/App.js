
import './styles/index.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayouts} from "./layouts";
import {PostsPage, UserDetailPage, UsersPage} from "./Pages";
import {PostsDetail} from "./components";
import {Comments} from "./components/Comments/Comments";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayouts/>}>
            <Route index element={<Navigate to={'/users'}/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'users/:id'} element={<UserDetailPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>
            <Route path={'posts/:id'} element={<PostsDetail/>}/>
            <Route path={'comments'} element={<Comments/>}/>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
