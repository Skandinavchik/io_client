import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";


const initialState = {
    conversationsLoadingStatus: 'init',
    conversations: [],
    conversationSearchResults: undefined,
    conversationQueryString: '',
};

const fetchConversations = createAsyncThunk('conversations/fetchConversations', async (userId) => {
    return await ky.get(`http://localhost:8000/api/v1.0/conversations/${userId}`, {
        credentials: 'include',
    }).json();
});

const conversationsSlicer = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        handleConversationSearchResults: (state, action) => { state.conversationSearchResults = action.payload },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchConversations.pending, state => { state.conversationsLoadingStatus = 'loading' })
            .addCase(fetchConversations.fulfilled, (state, action) => {
                state.conversationsLoadingStatus = 'idle';
                state.conversations = action.payload.data.users;
            })
            .addCase(fetchConversations.rejected, state => { state.conversationsLoadingStatus = 'error' })
            .addDefaultCase(() => { });
    },
});

const { reducer, actions } = conversationsSlicer;

export const { handleConversationSearchResults } = actions;
export { fetchConversations };
export default reducer;