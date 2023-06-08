import { Box, Divider } from "@mui/material";
import UsersList from '../../users/components/usersList';
// import Conversations from '../../users/components/conversation';
import SearchUsers from "../../users/components/searchUsers";
import ChatTabs from "./chatTabs";
import MainContent from '../../content/components/mainContent';
import SendMessage from "./sendMessage";


const Chat = () => {


    return (
        <Box sx={{ display: 'flex', width: 800, boxShadow: 20, m: 5 }}>
            <Box sx={{ width: '30%' }}>
                <Box sx={{ height: '600px', borderBottom: 'none', borderRadius: 0 }}>
                    <SearchUsers />
                    <Divider orientation='horizontal' />
                    {/* <Conversations /> */}
                    <UsersList />
                </Box>
                <Divider orientation='horizontal' />
                <ChatTabs />
            </Box>
            <Divider sx={{ height: '650px' }} orientation="vertical" />
            <Box sx={{ width: '70%' }}>
                <MainContent />
                <Divider orientation='horizontal' />
                <SendMessage />
            </Box>
        </Box>
    );
};

export default Chat;