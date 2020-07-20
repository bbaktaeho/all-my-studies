// todo: action
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// todo: create action
export const createINCREASE = () => ({ type: INCREASE });
export const createDECREASE = () => ({ type: DECREASE });
export const createINCREASE_BY = (diff: number) => ({ type: INCREASE_BY, payload: diff });

// ? state type
type CounterState = {
  count: number;
};
const initialSatate: CounterState = { count: 0 };

// ? action type
export type CounterAction =
  | ReturnType<typeof createINCREASE>
  | ReturnType<typeof createDECREASE>
  | ReturnType<typeof createINCREASE_BY>;

// todo: reducer
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
