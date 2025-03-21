import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";

export const store = configureStore({
    reducer: todoReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
