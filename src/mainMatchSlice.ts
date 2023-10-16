import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MainMatchData } from "./mainMatchData"; 
import { FetchData } from "./utils/fetch";

interface mainMatchState{
    data: MainMatchData | null;
    status: string;
    error: string | null;
}
const initialState: mainMatchState = {
    data: null,
    status: 'idle',
    error: null,
}

export const fetchMainMatchData = createAsyncThunk<MainMatchData | { error: string }, void>(
    'mainMatch/fetchMainMatchData',
    async (_, thunkAPI) => {
    try {
        const response = await FetchData();
        return response;
    } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: 'An error occurred' });
    }
}
)




export const mainMatchSlice = createSlice({
    name: 'mainMatch',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder => {
     builder.addCase(fetchMainMatchData.pending, (state, action)=> {
        state.status = 'pendingMainMatchData';
     });
     builder.addCase(fetchMainMatchData.fulfilled, (state, action)=> {
        state.status = 'idle';
        state.data = action.payload;
        state.error = null;
     });
      
     builder.addCase(fetchMainMatchData.rejected, (state, action)=> {
        state.status = 'idle';
        state.data = null;
        state.error = (action.payload as { error: string })?.error || 'An unknown error occurred';
        
     });
     
    })

})

export const {} = mainMatchSlice.actions;

