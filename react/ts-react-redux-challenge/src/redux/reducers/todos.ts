import { createAction, createReducer, ActionType } from 'typesafe-actions';

// todo: action
const ADD_TODO = 'todos/ADD_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// todo: create action
let nextId: number = 1;
export const createADD_TODO = createAction(ADD_TODO)<{ text: string }>();
export const createREMOVE_TODO = createAction(REMOVE_TODO)<{ id: number }>();
export const createTOGGLE_TODO = createAction(TOGGLE_TODO)<{ id: number }>();

// ? type state
export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};
type TodosState = Todo[];
const initialState: TodosState = [];

// ? type action
const todosAction = { createADD_TODO, createREMOVE_TODO, createTOGGLE_TODO };
type TodosAction = ActionType<typeof todosAction>;

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
