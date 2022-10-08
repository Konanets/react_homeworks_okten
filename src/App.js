import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegistPage} from "./pages";
import {PrivateRoute, PublicRoute} from "./router";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>

          <Route element={<PublicRoute/>}>
            <Route index element={<Navigate to={'login'}/>}/>
            <Route path={'registration'} element={<RegistPage/>}/>
            <Route path={'login'} element={<LoginPage/>}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={'cars'} element={<CarsPage/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
