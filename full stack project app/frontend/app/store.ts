// create Redux store and configure it into application

// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
