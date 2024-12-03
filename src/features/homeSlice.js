import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
      clipboard: ""
    }
 
}
export const homeSlice = createSlice({
 name: "home",
 initialState: initialState,
 reducers: {
   paste: (state, action) => {
     state.value.clipboard = action.payload;
   }
 }
})

export const {paste} = homeSlice.actions;
export default homeSlice.reducer;