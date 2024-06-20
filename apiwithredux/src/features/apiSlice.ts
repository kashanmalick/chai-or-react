import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    apiUsers: []
};

export const  fetchApiUsers :any = createAsyncThunk("fetchApiUsers",async ()=>{
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
})
const Slice = createSlice({
    name: "UserList",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
            console.log("Action", action);
            
            state.apiUsers = action.payload
        })
    }
})
export default Slice.reducer;