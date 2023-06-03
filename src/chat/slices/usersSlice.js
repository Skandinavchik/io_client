import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";


const initialState = {
    usersLoadingStatus: 'init',
    users: [],
    queryString: '',
};

const fetchUsers = createAsyncThunk('users/fetchUsers', async (queryString) => {
    if (queryString === undefined || queryString === '') {
        return await ky.get('http://localhost:8000/api/v1.0/users', {
            credentials: 'include',
        }).json();
    } else {
        return await ky.get(`http://localhost:8000/api/v1.0/users?username=${queryString}`, {
            credentials: 'include',
        }).json();
    }
});

const usersSlicer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        handleQueryString: (state, action) => { state.queryString = action.payload },
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

export const { handleQueryString } = actions;
export { fetchUsers };
export default reducer;