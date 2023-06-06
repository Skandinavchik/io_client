import { Box, Avatar, LinearProgress } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { handleSearchResults } from "../slices/usersSlice";
import { useEffect } from "react";



const Users = () => {

    const { users, usersLoadingStatus } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const id = localStorage.getItem("id");

    const renderUsers = (arr) => {
        return arr.filter(item => item._id !== id).map(item => {
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

    useEffect(() => {
        dispatch(handleSearchResults(usersList.length));
    }, [dispatch, usersList.length]);

    return (
        <Box sx={{}}>
            {!usersList.length && usersLoadingStatus === 'idle'
                ? <div style={{ textAlign: 'center' }}>Users not found</div>
                : usersLoadingStatus === 'loading' ? <LinearProgress /> : usersList}
        </Box>

    );
};

export default Users;