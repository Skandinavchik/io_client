import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from './pages/MainPage';
import AuthPage from '../auth/pages/authPage';



const App = () => {

    const location = useLocation();

    return (
        <>
            <NavBar />
            <Routes key={location.pathname} location={location}>
                <Route
                    path='/'
                    element={<MainPage />} />
                <Route
                    path='/auth'
                    element={<AuthPage />} />
            </Routes>
        </>

    );
};

export default App;