import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components";
import {CarsPage, FormPage} from "./pages";


function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path={'/'} element={<CarsPage/>}/>
            <Route path={'/newCar'} element={<FormPage/>}/>
            <Route path={'/update'} element={<FormPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
