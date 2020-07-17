import { createReducer } from 'typesafe-actions';
import { TodosState, TodosAction } from './types';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

const initialState: TodosState = [];

const todosReducer = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) => state.concat({ ...action.payload, done: false }),
  [TOGGLE_TODO]: (state, action) => state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, action) => state.filter((todo) => todo.id !== action.payload),
});

export default todosReducer;
