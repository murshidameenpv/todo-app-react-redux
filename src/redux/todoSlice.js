import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({id:Date.now(),text:action.payload,isCompleted:false})
      }
  }
});
console.log(todoSlice,"pppppppppppppppp");

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer