import { Box, Tabs, Tab } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useState } from "react";


const ChatTabs = () => {

    const [tab, setTab] = useState(1);

    const handleChange = (event, newTab) => {
        setTab(newTab);
    };

    return (
        <Box>
            <Tabs variant='fullWidth' value={tab} onChange={handleChange} aria-label="icon tabs example">
                <Tab sx={{ minWidth: '20px', minHeight: '50px' }} icon={<AccountCircleOutlinedIcon />} aria-label="user" />
                <Tab sx={{ minWidth: '20px', minHeight: '50px' }} icon={<ChatBubbleOutlineOutlinedIcon />} aria-label="chat" />
                <Tab sx={{ minWidth: '20px', minHeight: '50px' }} icon={<SettingsOutlinedIcon />} aria-label="settings" />
            </Tabs>
        </Box>
    );
};

export default ChatTabs;