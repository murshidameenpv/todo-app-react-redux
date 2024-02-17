import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/todoSlice.js'
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
