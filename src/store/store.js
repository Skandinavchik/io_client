import { configureStore } from "@reduxjs/toolkit";
import users from '../chat/slices/usersSlice';


const store = configureStore({
    reducer: { users },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };