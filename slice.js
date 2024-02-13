
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
      { id: 0, title: "diska", done: false },
      { id: 1, title: "dammsuga", done: false },
      { id: 2, title: "bädda sängen", done: false },
      { id: 3, title: "tvätta", done: false },
    ],
    text: "",
  }

  const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
     updateText(state, action) {
      state.text = action.payload;
    },  
  },
});

export const { addTodo, deleteTodo, toggleDone, updateText } = todoSlice.actions;
export default todoSlice.reducer;
