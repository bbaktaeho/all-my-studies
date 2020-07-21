import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>;

// ? type state
export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};
export type TodosState = Todo[];
