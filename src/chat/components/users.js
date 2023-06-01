import { Box, Avatar } from "@mui/material";
import { useEffect } from "react";
import { fetchUsers } from '../slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';



const Users = () => {

    const { users, usersLoadingStatus, queryString } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers('http://localhost:8000/api/v1.0/users'));
    }, [dispatch]);

    if (usersLoadingStatus === 'error') {
        return 'Error';
    }

    const renderUsers = users.map(item => {
        return (
            <Box key={item.userName} sx={{
                pl: '20px',
                pt: '10px',
                pb: '10px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                '&:hover': {
                    background: 'rgba(25, 118, 210, 0.04)',
                }
            }}>
                <Avatar alt={item.userName} src="#" />
                <div>{item.userName}</div>
            </Box>
        );
    });

    return (
        <Box sx={{}}>
            {users.length ? renderUsers : null }
        </Box>
    );
};

export default Users;