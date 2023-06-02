import { configureStore } from "@reduxjs/toolkit";
import users from '../chat/slices/usersSlice';
import tabs from '../chat/slices/tabsSlice';


const store = configureStore({
    reducer: { users, tabs },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };