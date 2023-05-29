import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import checkCookie from "../../utils/checkCookie";
import ky from 'ky';


const NavBar = () => {

    const logOut = async () => {
        try {
            await ky.get('http://localhost:8000/api/v1.0/users/logout', {
                credentials: 'include',
            }).json();

            window.location.reload();
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '8vh' }}>
                    <Link to={'/'}>
                        <Button sx={{ color: '#fff' }}>
                            Logo
                        </Button>
                    </Link>

                    {checkCookie(document.cookie, 'data')
                        ? <Button sx={{ color: '#fff' }}
                            onClick={logOut}>
                            Logout
                        </Button>

                        : <Link to={'/auth'}>
                            <Button sx={{ color: '#fff' }}>
                                Sign In
                            </Button>
                        </Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;