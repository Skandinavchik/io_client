import { Box, Avatar } from "@mui/material";



const Conversation = () => {

    

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
            <Avatar alt='' src="#" />
            <div>{}</div>
        </Box>
    );
};

export default Conversation;