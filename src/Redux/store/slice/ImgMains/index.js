import { createSlice } from "@reduxjs/toolkit";

export const imgMain = createSlice({
    name: "imgMain",
    initialState:{
        list:[]
    },
    reducers:{
        setImgsMain: (state, action)=>{
            state.list = action.payload;
        }
    }
})


export default imgMain.reducer;

export const img_main = imgMain.actions;


