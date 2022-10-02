import {Navigate, Route, Routes} from "react-router-dom";
import {AuthorizationLayout, MainLayout} from "./layouts";
import {CarsPage, FormPage, LogInPage, LogOutPage, RegistrationPage} from "./pages";
import {RequiredAuth} from "./hoc";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to={'/'} element={
            <RequiredAuth ignore={true}>
                <AuthorizationLayout/>
            </RequiredAuth>
        }>
            <Route index element={<Navigate to={'login'}/>}/>
            <Route path={'login'} element={
                <RequiredAuth ignore={true}>
                    <LogInPage/>
                </RequiredAuth>
            }/>
            <Route path={'registration'} element={<RegistrationPage/>}/>
        </Route>
        <Route to={'/cars'} element={
            <RequiredAuth>
                <MainLayout/>
            </RequiredAuth>
        }>
            <Route index element={<Navigate to={'cars'}/>}/>
            <Route path={'cars'} element={<CarsPage/>}/>
            <Route path={'logout'} element={<LogOutPage/>}/>
            <Route path={'new'} element={<FormPage/>}/>
            <Route path={'update'} element={<FormPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
