// todo: action
const ADD_TODO = 'todos/ADD_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;

// todo: create action
let nextId: number = 1;
export const createADD_TODO = (text: string) => ({
  type: ADD_TODO,
  paylod: { id: nextId++, text: text },
});
export const createREMOVE_TODO = (id: number) => ({ type: REMOVE_TODO, payload: { id } });
export const createTOGGLE_TODO = (id: number) => ({ type: TOGGLE_TODO, payload: { id } });

// ? type state
export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};
type TodosState = Todo[];
const initialState: TodosState = [];

// ? type action
type TodosAction =
  | ReturnType<typeof createADD_TODO>
  | ReturnType<typeof createREMOVE_TODO>
  | ReturnType<typeof createTOGGLE_TODO>;

// todo: reducer
export default function todos(state: TodosState = initialState, action: TodosAction): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({ id: action.paylod.id, text: action.paylod.text, isComplete: false });
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isComplete: !todo.isComplete } : todo,
      );
    default:
      return state;
  }
}
