import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";


const initialState = {
    userLoadingStatus: 'init',
    user: [],
    searchResults: undefined,
    queryString: '',
};

const fetchUserById = createAsyncThunk('user/fetchUserById', async (userId) => {
    return await ky.get(`http://localhost:8000/api/v1.0/users/${userId}`, {
        credentials: 'include',
    }).json();
});

const usersSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },

    extraReducers: builder => {
        builder
            .addCase(fetchUserById.pending, state => { state.userLoadingStatus = 'loading' })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.userLoadingStatus = 'idle';
                state.user = [...state.user, action.payload.data.user];
            })
            .addCase(fetchUserById.rejected, state => { state.userLoadingStatus = 'error' })
            .addDefaultCase(() => { });
    },
});

const { reducer } = usersSlicer;

// export const { handleQueryString, handleSearchResults } = actions;
export { fetchUserById };
export default reducer;