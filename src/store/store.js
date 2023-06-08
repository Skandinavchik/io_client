import { configureStore } from "@reduxjs/toolkit";
import user from '../users/slices/usersSlice';
import conversations from '../users/slices/conversationsSlice';
import tabs from '../chat/slices/tabsSlice';


const store = configureStore({
    reducer: { user, conversations, tabs },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };