import { Box, Avatar } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from '../slices/usersSlice';



const Conversation = ({ item }) => {

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const currentUserId = localStorage.getItem('id');

    const findCompanionUserId = (arr) => {
        return arr.filter(item => item !== currentUserId);
    };

    const aaa = findCompanionUserId(item)[0];

    useEffect(() => {
        dispatch(fetchUserById(aaa));
    }, [dispatch, aaa]);


    return (
        <Box sx={{
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
            <Avatar alt={user.userName} src="#" />
            <div>{user.userName}</div>
        </Box>
    );
};

export default Conversation;