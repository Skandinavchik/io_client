import { Box } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { handleSearchResults } from "../slices/usersSlice";
import { useEffect } from "react";
import User from './user';



const UsersList = () => {

    const { users, usersLoadingStatus } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const id = localStorage.getItem("id");

    const renderUsers = (arr) => {
        return arr.filter(item => item._id !== id).map(item => {
            return (
                <User key={item._id} user={item} />
            );
        });
    };

    const usersList = renderUsers(users);

    useEffect(() => {
        dispatch(handleSearchResults(usersList.length));
    }, [dispatch, usersList.length]);


    return (
        <Box sx={{}}>
            {/* {!usersList.length && usersLoadingStatus === 'idle' ? null : usersList} */}
            {usersList}
        </Box>
    );
};

export default UsersList;