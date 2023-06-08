import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";


const initialState = {
    usersLoadingStatus: 'init',
    users: [],
    searchResults: undefined,
    queryString: '',
};

const fetchUsers = createAsyncThunk('users/fetchUsers', async (queryString = initialState.queryString) => {
    return await ky.get(`http://localhost:8000/api/v1.0/users?username=${queryString}`, {
        credentials: 'include',
    }).json();
});

const usersSlicer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        handleQueryString: (state, action) => { state.queryString = action.payload },
        handleSearchResults: (state, action) => { state.searchResults = action.payload },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => { state.usersLoadingStatus = 'loading' })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.usersLoadingStatus = 'idle';
                state.users = action.payload.data.users;
            })
            .addCase(fetchUsers.rejected, state => { state.usersLoadingStatus = 'error' })
            .addDefaultCase(() => { });
    },
});

const { reducer, actions } = usersSlicer;

export const { handleQueryString, handleSearchResults } = actions;
export { fetchUsers };
export default reducer;