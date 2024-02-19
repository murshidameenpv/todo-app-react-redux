import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/todoSlice.js'
import filterReducer from '../redux/filterSlice.js'
import searchReducer from '../redux/searchSlice.js'
export default configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});
