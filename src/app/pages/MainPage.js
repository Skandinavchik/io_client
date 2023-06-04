import Chat from '../../chat/components/chat';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import checkCookie from "../../utils/checkCookie";


const style = {
    position: 'relative',
    minHeight: '92vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const MainPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!checkCookie(document.cookie, 'data')) {
            localStorage.removeItem('id');
            navigate('/auth', 'replace');
        }
    }, [navigate]);

    return (
        <main style={style}>
            <Chat />
        </main>
    );
};

export default MainPage;