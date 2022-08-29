import { createSlice } from "@reduxjs/toolkit";

export const technology = createSlice({
    name: "technology",
    initialState:{
        list: []
    },
    reducers: {
        setTechnologies: (state, action)=>{
            state.list = action.payload;
        }
    }
});


export default technology.reducer;

export const tech = technology.actions;

