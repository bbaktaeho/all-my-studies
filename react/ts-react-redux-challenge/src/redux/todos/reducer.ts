import { createReducer } from 'typesafe-actions';
import { TodosState, TodosAction } from './types';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';

let nextId: number = 1;

const initialState: TodosState = [];

// todo: reducer
export default createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({ id: nextId++, text: action.payload.text, isComplete: false }),
  [REMOVE_TODO]: (state, action) => state.filter((todo) => todo.id !== action.payload.id),
  [TOGGLE_TODO]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload.id ? { ...todo, isComplete: !todo.isComplete } : todo,
    ),
});
