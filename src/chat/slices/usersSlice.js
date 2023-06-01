import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";


const initialState = {
    usersLoadingStatus: 'idle',
    users: [],
    queryString: '',
};

const fetchUsers = createAsyncThunk('users/fetchUsers', (url) => {
    return ky.get(url, {
        credentials: 'include',
    }).json();
});

const usersSlicer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        handleQueryString: (state, action) => { state.queryString = action.payload }
    },

    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => { state.usersLoadingStatus = 'loading' })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload.data.users;
                state.usersLoadingStatus = 'idle';
            })
            .addCase(fetchUsers.rejected, state => { state.usersLoadingStatus = 'error' })
            .addDefaultCase(() => { });
    },
});

const { reducer, actions } = usersSlicer;

export const { handleQueryString } = actions;
export { fetchUsers };
export default reducer;