import { Box, Tabs, Tab } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useSelector, useDispatch } from "react-redux";
import { handleActiveTab } from "../slices/tabsSlice";


const ChatTabs = () => {

    const { activeTab } = useSelector(state => state.tabs);
    const dispatch = useDispatch();

    const changeActiveTab = (event, newTab) => {
        dispatch(handleActiveTab(newTab));
    };

    return (
        <Box>
            <Tabs variant='fullWidth' value={activeTab} onChange={changeActiveTab} aria-label="icon tabs">
                <Tab sx={{ minWidth: '20px', minHeight: '50px' }} icon={<AccountCircleOutlinedIcon />} aria-label="user" />
                <Tab sx={{ minWidth: '20px', minHeight: '50px' }} icon={<ChatBubbleOutlineOutlinedIcon />} aria-label="chat" />
                <Tab sx={{ minWidth: '20px', minHeight: '50px' }} icon={<SettingsOutlinedIcon />} aria-label="settings" />
            </Tabs>
        </Box>
    );
};

export default ChatTabs;