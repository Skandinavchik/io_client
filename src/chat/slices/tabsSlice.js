import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: 1,
};

const tabsSlicer = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        handleActiveTab: (state, action) => { state.activeTab = action.payload },
    },
});

const { reducer, actions } = tabsSlicer;

export const { handleActiveTab } = actions;
export default reducer;