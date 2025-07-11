import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // Import your todo reducer

const store = configureStore({
  reducer: {
    // Assign the todoReducer to the 'todos' key in your global state
    todos: todoReducer,
  },
  // configureStore automatically sets up Redux DevTools Extension and Redux Thunk
});

export default store;
