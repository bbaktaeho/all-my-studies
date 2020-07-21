import { createReducer } from 'typesafe-actions';
import { CounterState, CounterAction } from './types';
import { INCREASE, DECREASE, INCREASE_BY } from './actions';

const initialSatate: CounterState = { count: 0 };

// todo: reducer
export default createReducer<CounterState, CounterAction>(initialSatate, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});
