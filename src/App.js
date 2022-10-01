import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {CarsPage, LogInPage, RegistrationPage} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'/login'}/>}/>
            <Route path={'/login'} element={<LogInPage/>}/>
            <Route path={'/registration'} element={<RegistrationPage/>}/>
            <Route path={'/cars'} element={<CarsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
