import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";

const store = configureStore({
    reducer: rootReducer,
    // Redux Toolkit automatically includes:
    // - Redux DevTools Extension
    // - Redux Thunk middleware
    // - Default middleware (redux-thunk, immutability check, serializability check)
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // Disable immutability check for legacy reducers that mutate state
            // TODO: Consider migrating reducers to use createSlice for better immutability
            immutableCheck: false,
            serializableCheck: false,
        }),
});

export default store;


