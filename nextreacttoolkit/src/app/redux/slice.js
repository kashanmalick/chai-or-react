const { createSlice,nanoid,current } = require("@reduxjs/toolkit");

const initialState = {
    users: JSON.parse(localStorage.getItem('userData')) || [],
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
            let userData = JSON.stringify(current(state.users));
            localStorage.setItem('userData', userData);
        },
        removeUser:(state,action)=>{
            const newState = state.users.filter(user => user.id !== action.payload);
            state.users = newState;
            localStorage.setItem('userData', JSON.stringify(state.users));
        }
    }
})

export const {addUser,removeUser} = Slice.actions
export default Slice.reducer