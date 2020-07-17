import { combineReducers } from 'redux';
import counter from './counter';
const rootReducer = combineReducers({
  counter,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
