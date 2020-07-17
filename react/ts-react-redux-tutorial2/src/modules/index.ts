import { combineReducers } from 'redux';
import counter from './counter';
import todosReducer from './todos';
import githubReducer from './github';
const rootReducer = combineReducers({
  counter,
  todosReducer,
  githubReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
