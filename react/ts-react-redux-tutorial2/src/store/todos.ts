import { createAction, ActionType, createReducer, action } from 'typesafe-actions';

const ADD_TODO = 'todos/ADD_TODOS' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
// export const toggleTodo = (id: number) => ({
//   type: TOGGLE_TODO,
//   payload: id,
// });

export const removeTodo = createAction(REMOVE_TODO)<number>();
// export const remmoveTodo = (id: number) => ({
//   type: REMOVE_TODO,
//   payload: id,
// });

const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;
// type TodosAction = ReturnType<typeof addTodo> | ReturnType<typeof toggleTodo> | ReturnType<typeof remmoveTodo>;
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];
const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) => state.concat({ ...action.payload, done: false }),
  [TOGGLE_TODO]: (state, action) => state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, action) => state.filter((todo) => todo.id !== action.payload),
});
// function todos(state: TodosState = initialState, action: TodosAction): TodosState {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat({ id: action.payload.id, text: action.payload.text, done: false });
//     case TOGGLE_TODO:
//       return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
//     case REMOVE_TODO:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

export default todos;
