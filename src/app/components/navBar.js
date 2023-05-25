import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import checkCookie from "../../utils/checkCookie";
import ky from 'ky';


const NavBar = () => {

    const [anchorElUser, setAnchorElUser] = useState(null);

    const cookieExists = checkCookie(document.cookie, 'data');
    const settings = ['Profile', 'Logout'];

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const logOut = async (event) => {
        if (event.currentTarget.textContent === 'Logout') {
            await ky.get('http://localhost:8000/api/v1.0/users/logout', {
                credentials: 'include',
            }).json();
            window.location.reload();
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to={'/'}>
                        <Button sx={{ color: '#fff' }}>
                            Logo
                        </Button>
                    </Link>
                    {cookieExists
                        ? <Box sx={{ flexGrow: 0 }}>
                            <Tooltip>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="#" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map(item => (
                                    <MenuItem key={item} onClick={(event) => {logOut(event); handleCloseUserMenu();}}>
                                        <Typography textAlign="center">{item}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        : <Link to={'/auth'}>
                            <Button sx={{ color: '#fff' }}>
                                Sign In
                            </Button>
                        </Link>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;