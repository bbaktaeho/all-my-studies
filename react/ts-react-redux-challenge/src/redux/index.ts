import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import github from './github';
const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
