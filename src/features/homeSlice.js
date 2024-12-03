import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
      clipboard: "",
      clickcheck: 1,
      font: "Arial", // Default font
      fontSize: "12px", // Default font size
    }
 
}
export const homeSlice = createSlice({
 name: "home",
 initialState: initialState,
 reducers: {
   paste: (state, action) => {
     state.value.clipboard = action.payload;
     state.value.clickcheck++;
   },
   setFont: (state, action) => {
      state.value.font = action.payload;
    },
    setFontSize: (state, action) => {
      state.value.fontSize = action.payload;
    },
   
 }
})

export const {paste, setFont, setFontSize} = homeSlice.actions;
export default homeSlice.reducer;