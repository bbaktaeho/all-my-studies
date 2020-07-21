import { createAction } from 'typesafe-actions';

// todo: action
export const ADD_TODO = 'todos/ADD_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// todo: create action
export const createADD_TODO = createAction(ADD_TODO)<{ text: string }>();
export const createREMOVE_TODO = createAction(REMOVE_TODO)<{ id: number }>();
export const createTOGGLE_TODO = createAction(TOGGLE_TODO)<{ id: number }>();
