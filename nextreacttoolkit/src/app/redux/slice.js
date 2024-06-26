const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: [],
};

const Slice = createSlice({
    name: "AdduserSlice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const data={
                id: nanoid(),
                name : action.payload
            }
            state.users.push(data);
        }
    }
})

export const {addUser} = Slice.actions
export default Slice.reducer