import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/homeSlice"
import { insertSlice } from "../features/insertSlice";


export const store = configureStore({
    reducer: {
        home: homeSlice,
        insert: insertSlice,
    },
})