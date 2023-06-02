import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";


const initialState = {
    usersLoadingStatus: 'idle',
    users: [],
    filteredUsers: [],
    queryString: '',
};

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return await ky.get('http://localhost:8000/api/v1.0/users', {
        credentials: 'include',
    }).json();
});

const usersSlicer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        handleQueryString: (state, action) => { state.queryString = action.payload },
        findUsers: (state, action) => {
            const regex = new RegExp(action.payload, 'i');
            state.filteredUsers = state.users.filter(item => regex.test(item.userName));
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => { state.usersLoadingStatus = 'loading' })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.usersLoadingStatus = 'idle';
                state.users = action.payload.data.users;
                state.filteredUsers = action.payload.data.users;
            })
            .addCase(fetchUsers.rejected, state => { state.usersLoadingStatus = 'error' })
            .addDefaultCase(() => { });
    },
});

const { reducer, actions } = usersSlicer;

export const { handleQueryString, findUsers } = actions;
export { fetchUsers };
export default reducer;