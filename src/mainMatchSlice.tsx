import { createSlice } from "@reduxjs/toolkit";
import { mainMatchInformation } from "../../models/mainMatchInformation";

interface mainMatchState{
    info: mainMatchInformation | null;
}

const initialState: mainMatchState = {
    info: null
}


export const mainMatchSlice = createSlice({
    name: 'mainMatch',
    initialState,
    reducers: {
        
    }

})

export const {} = mainMatchSlice.actions;

