import Chat from '../../chat/components/chat';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useCheckCookie from '../../hooks/useCheckCookie';


const style = {
    position: 'relative',
    minHeight: '92vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const MainPage = () => {

    const navigate = useNavigate();
    const cookies = useCheckCookie(document.cookie, 'data')

    useEffect(() => {
        if (!cookies) {
            localStorage.removeItem('id');
            navigate('/auth', 'replace');
        }
    }, [navigate, cookies]);

    return (
        <main style={style}>
            <Chat />
        </main>
    );
};

export default MainPage;