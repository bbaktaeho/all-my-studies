import { combineReducers } from 'redux';
import counter from './counter';
import todosReducer from './todos';
const rootReducer = combineReducers({
  counter,
  todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
