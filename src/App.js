import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts ";
import {CommentsPage, HomePage, LoginPage, NotFoundPage, PostsPage, TodosPage, UsersPage} from "./pages";
import {RequireAuth} from "./hoc";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'home'}/>}/>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'comments'} element={
                <RequireAuth>
                    <CommentsPage/>
                </RequireAuth>
            }/>
            <Route path={'posts'} element={
                    <RequireAuth>
                        <PostsPage/>
                    </RequireAuth>
            }/>
            <Route path={'users'} element={
                <RequireAuth>
                <UsersPage/>
                </RequireAuth>
            }/>
            <Route path={'todos'} element={
                <RequireAuth>
                    <TodosPage/>
                </RequireAuth>
            }/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
