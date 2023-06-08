import { Box } from "@mui/material";
import UserContent from '../../users/components/userContent';
import MessagesContent from "./messagesContent";
import SettingsContent from "./settingsContent";
import { useSelector } from "react-redux";


const MainContent = () => {

    const { activeTab } = useSelector(state => state.tabs);

    const renderContent = (tabState) => {
        switch (true) {
            case tabState === 0:
                return (
                    <UserContent />
                );
            case tabState === 1:
                return (
                    <MessagesContent />
                );
            case tabState === 2:
                return (
                    <SettingsContent />
                );
            default:
                return (
                    <Box />
                );
        };
    };

    const content = renderContent(activeTab);

    return (
        <Box sx={{ height: '600px', pl: '20px', pr: '20px' }}>
            {content}
        </Box>
    );
};

export default MainContent;