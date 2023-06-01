import { Box, Divider } from "@mui/material";
import Users from "./users";
import SearchUsers from "./searchUsers";
import ChatTabs from "./chatTabs";
import MessagesContent from "./messagesContent";
import SendMessage from "./sendMessage";


const Chat = () => {


    return (
        <Box sx={{ display: 'flex', width: 800, boxShadow: 20, m: 5 }}>
            <Box sx={{ width: '30%' }}>
                <Box sx={{ height: '600px', borderBottom: 'none', borderRadius: 0 }}>
                    <SearchUsers />
                    <Divider orientation='horizontal' />
                    <Users />
                </Box>
                <Divider orientation='horizontal' />
                <ChatTabs />
            </Box>
            <Divider sx={{ height: '650px' }} orientation="vertical" />
            <Box sx={{ width: '70%' }}>
                <MessagesContent />
                <Divider orientation='horizontal' />
                <SendMessage />
            </Box>
        </Box>
    );
};

export default Chat;