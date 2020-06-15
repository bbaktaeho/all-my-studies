import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// ! 루트 리두서 만들기
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
