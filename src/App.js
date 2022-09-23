import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {AlbumsPage, PostPage, TodosPage, WelcomePage} from "./pages";
import {CommentsPage} from "./pages/CommentsPage";

function App() {
    return (
        <div className="App">
            <header>
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
                <div>
                    <Link to={'/todos'}>Todos</Link>
                </div>
                <div>
                    <Link to={'/albums'}>Albums</Link>
                </div>
                <div>
                    <Link to={'/comments'}>Comments</Link>
                </div>

            </header>
            <Routes>
                <Route path={'/'} element={<WelcomePage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/albums'} element={<AlbumsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>
                <Route path={'/comments/:id'} element={<PostPage/>}/>


            </Routes>
        </div>
    );
}

export default App;
