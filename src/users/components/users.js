import { Box, Avatar } from "@mui/material";
import ky from "ky";
import { useEffect, useState } from "react";



const Users = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async (url) => {
        const res = await ky.get(url, {
            credentials: 'include',
        }).json();

        return res;
    };

    useEffect(() => {
        getUsers('http://localhost:8000/api/v1.0/users')
            .then(data => setUsers(data.data.users))
            .catch(err => console.log(err.message));

    }, []);

    const renderUsers = users.map(item => {
        return (
            <Box
                key={item.userName}
                sx={{
                    pt: '10px',
                    pb: '10px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                }}>
                <Avatar alt={item.userName} src="#" />
                <div>{item.userName}</div>
            </Box>

        );
    })

    return (
        <Box sx={{ pl: '20px' }}>
            {users.length === 0 ? null : renderUsers}
        </Box>
    );
};

export default Users;