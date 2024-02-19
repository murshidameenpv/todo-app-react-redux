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
    markAllCompleted: (state) => {
      return state.map((todo) => ({ ...todo, isCompleted: true }));
    },
  },
});
console.log(todoSlice, "pppppppppppppppp");

export const { addTodo, markAllCompleted } = todoSlice.actions;
export default todoSlice.reducer;
