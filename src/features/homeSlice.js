import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  highlightedColor: '#FF0000',
    value: {
      clipboard: "",
      clickcheck: 1,
      font: "Arial", // Default font
      fontSize: "12", // Default font size
      selection: null,
      text: "", // Full text in textarea
      formatPainter: {
      active: false, // Whether Format Painter is active
      font: "Arial", // Temporary storage for Format Painter font
      fontSize: "12", // Temporary storage for Format Painter font size
    },
    }
 
}
export const homeSlice = createSlice({
 name: "home",
 initialState: initialState,
 reducers: {
  paste: (state, action) => {
    const clipboardText = action.payload || ""; // Ensure clipboard content is a string
    state.value.clipboard = clipboardText;
    state.value.text = (state.value.text || "") + clipboardText; // Prevent undefined concatenation
    state.value.clickcheck++;
    console.log("Updated text:", state.value.text);
  },


   setFont: (state, action) => {
      state.value.font = action.payload;
    },
    setFontSize: (state, action) => {
      state.value.fontSize = action.payload;
    },
     activateFormatPainter: (state) => {
      state.value.formatPainter.active = true;
      state.value.formatPainter.font = state.value.font;
      state.value.formatPainter.fontSize = state.value.fontSize;
    },
    deactivateFormatPainter: (state) => {
      state.value.formatPainter.active = false;
    },
    applyFormatPainter: (state) => {
      state.value.font = state.value.formatPainter.font;
      state.value.fontSize = state.value.formatPainter.fontSize;
    },
       updateText: (state, action) => {
      state.value.text = action.payload; // Update full text
      console.log(state.value.text);
    },

 }
})

export const {paste,
  setFont,
  setFontSize,
  updateText,
  setSelection,
  highlightTextColor,
  applyStylesToSelection,
  activateFormatPainter,
  deactivateFormatPainter,
  applyFormatPainter,} = homeSlice.actions;
export default homeSlice.reducer;