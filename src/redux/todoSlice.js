import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action, "ooooooooo");
      state.push({ id: Date.now(), text: action.payload, isCompleted: false });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    markAsCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = true;
      }
    },
    markAsIncomplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = false;
      }
    },
    markAllCompleted: (state) => {
      return state.map((todo) => ({ ...todo, isCompleted: true }));
    },
  },
});
console.log(todoSlice, "pppppppppppppppp");

export const { addTodo, markAllCompleted, deleteTodo ,markAsCompleted,markAsIncomplete} = todoSlice.actions;
export default todoSlice.reducer;
