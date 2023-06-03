import { Box, Avatar } from "@mui/material";
import { useEffect } from "react";
import { fetchUsers } from '../slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';



const Users = () => {

    const { users, usersLoadingStatus, queryString } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(queryString);
        dispatch(fetchUsers(queryString));
    }, [dispatch, queryString]);

    

    const renderUsers = (arr) => {
        return arr.map(item => {
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
    };

    const usersList = renderUsers(users);

    return (
        <Box sx={{}}>
            {!usersList.length && usersLoadingStatus === 'idle'
                ? <div style={{ textAlign: 'center' }}>Users not found</div>
                : usersList}
        </Box>

    );
};

export default Users;