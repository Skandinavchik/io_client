import { configureStore } from "@reduxjs/toolkit";
import users from '../users/slices/usersSlice';
import conversations from '../users/slices/conversationsSlice';
import tabs from '../chat/slices/tabsSlice';


const store = configureStore({
    reducer: { users, conversations, tabs },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };