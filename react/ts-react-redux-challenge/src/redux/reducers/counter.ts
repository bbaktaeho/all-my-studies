import { createAction, ActionType, createReducer } from 'typesafe-actions';
// todo: action
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// todo: typsafe createAction
export const createINCREASE = createAction(INCREASE)();
export const createDECREASE = createAction(DECREASE)();
export const createINCREASE_BY = createAction(INCREASE_BY)<number>();
// todo: create action
/**
 *  export const createINCREASE = () => ({ type: INCREASE });
 *  export const createDECREASE = () => ({ type: DECREASE });
 *  export const createINCREASE_BY = (diff: number) => ({ type: INCREASE_BY, payload: diff });
 */
// ? state type
type CounterState = {
  count: number;
};
const initialSatate: CounterState = { count: 0 };

// ? action type
const actions = { createINCREASE, createDECREASE, createINCREASE_BY };
type CounterAction = ActionType<typeof actions>;
/**
export type CounterAction =
  | ReturnType<typeof createINCREASE>
  | ReturnType<typeof createDECREASE>
  | ReturnType<typeof createINCREASE_BY>;
*/
// todo: reducer
export default createReducer<CounterState, CounterAction>(initialSatate, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

/**
export default function counter(
  state: CounterState = initialSatate,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
*/
