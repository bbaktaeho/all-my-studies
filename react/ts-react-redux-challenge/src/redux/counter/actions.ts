import { createAction } from 'typesafe-actions';

// todo: action
export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const INCREASE_BY = 'counter/INCREASE_BY';

// todo: typsafe createAction
export const createINCREASE = createAction(INCREASE)();
export const createDECREASE = createAction(DECREASE)();
export const createINCREASE_BY = createAction(INCREASE_BY)<number>();
