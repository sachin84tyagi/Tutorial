import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./sliceCounter/sliceCounter";

export const store = configureStore({
    reducer: {
        counterReducer: counterReducer
    }
})