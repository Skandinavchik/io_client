import { Box, Avatar } from "@mui/material";
import ky from "ky";
import { useEffect, useState } from "react";



const Users = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async (url) => {
        try {
            const res = await ky.get(url, {
                credentials: 'include',
            }).json();

            return res;

        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getUsers('http://localhost:8000/api/v1.0/users')
            .then(data => setUsers(data.data.users))
            .catch(err => console.log(err.message));
    }, []);

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
    })

    return (
        <Box sx={{}}>
            {users.length === 0 ? null : renderUsers}
        </Box>
    );
};

export default Users;