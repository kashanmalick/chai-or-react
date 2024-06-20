// store/slice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: JSON.parse(localStorage.getItem('todoData')) || [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
            localStorage.setItem('todoData', JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            const newState = state.todos.filter(todo => todo.id !== action.payload);
            state.todos = newState;
            localStorage.setItem('todoData', JSON.stringify(state.todos));
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
                localStorage.setItem('todoData', JSON.stringify(state.todos));
            }
        },
    },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
