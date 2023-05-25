import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from './pages/MainPage';
import AuthPage from '../auth/pages/authPage';
import { useEffect } from "react";
import checkCookie from "../utils/checkCookie";

const App = () => {

    const location = useLocation();
    const navigate = useNavigate();
    

    useEffect(() => {
        if (!checkCookie(document.cookie, 'data')) {
            navigate('/auth', 'replace');
        }
    }, [navigate]);

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