import { createSlice } from "@reduxjs/toolkit";
import { homeSlice } from "./homeSlice";

const initialState = {
    image:  null,
    doc: null
}

export const insertSlice = createSlice(
    {
        name:"insert",
        initialState: initialState,
        reducers: {
            insertImage: (state, action) => {
                const file = action.payload;
                console.log(file)
               state.image =file;
             const textarea = document.querySelector('.textarea');
             textarea.focus();
             const image = document.createElement('img');
             image.src = file;
             textarea.appendChild(image);

            }

        },
    insertDoc: (state, action) => {
        state.doc = action.payload;
    }
 
})

export const {insertImage, insertDoc} = insertSlice.actions;
export default homeSlice.reducer