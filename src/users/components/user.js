import { Box, Avatar } from "@mui/material";



const User = ({ user }) => {

    const { userName } = user;


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
            <Avatar alt={userName} src="#" />
            <div>{userName}</div>
        </Box>
    );
};

export default User;