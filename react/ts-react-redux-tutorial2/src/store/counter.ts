import { createAction, ActionType, createReducer } from 'typesafe-actions';

// todo: action
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// todo: create action
export const increase = createAction(INCREASE)();
// * -> () => ({ type: INCREASE })
export const decrease = createAction(DECREASE)();
// * -> () => ({ type: DECREASE })
export const increaseBy = createAction(INCREASE_BY)<number>();
// * -> () => ({ type: INCREASE_BY, payload: ...  })

// ! initialState type
type CounterState = {
  count: number;
};
const initialState: CounterState = {
  count: 0,
};
// ! action type
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;
// type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>;

// todo: reducer
// 메소드 체이닝
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({ count: state.count + action.payload }));

// const counter = createReducer<CounterState, CounterAction>(initialState, {
//   [INCREASE]: (state) => ({ count: state.count + 1 }),
//   [DECREASE]: (state) => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

// 기존방식
// export default function counter(state: CounterState = initialState, action: CounterAction): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }
export default counter;
