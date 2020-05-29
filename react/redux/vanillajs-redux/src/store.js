import { createStore } from "redux";
import { createAction, createReducer, createSlice, configureStore } from "@reduxjs/toolkit";

// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const addTodo = (text) => {
//     return { type: ADD, text };
// };
// const deleteTodo = (id) => {
//     return { type: DELETE, id };
// };

// const ADD = "ADD";
// const DELETE = "DELETE";

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteTodo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const reducer = createReducer([], {
//   [addTodo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteTodo]: (state, action) => {
//     return state.filter((todo) => todo.id !== action.payload);
//   },
// });
const todos = createSlice({
  name: "todosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { add, remove } = todos.actions;

export default configureStore({ reducer: todos.reducer });
