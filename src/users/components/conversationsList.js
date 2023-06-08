import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Conversation from "./conversation";


const ConversationsList = () => {

    const { conversations } = useSelector(state => state.conversations);
    const conversationsArray = conversations.data && conversations.data.conversations;

    const renderConversations = (arr) => {
        return !arr ? null : arr.map(item => {
            return (
                <Conversation key={item._id} item={item.members} />
            );
        });
    };

    const conversationsList = renderConversations(conversationsArray);

    return (
        <Box sx={{}}>
            {conversationsList}
        </Box>
    );
};

export default ConversationsList;