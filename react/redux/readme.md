# vanillajs-redux

- react

  리엑트는 변화가 생긴 부분만 재랜더링

- event.preventDefault

  이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소

- redux toolkit

  `npm install reduxjs/toolkit`

  적은 양의 코드로 같은 기능을 하도록 도와줌

  state를 mutate해도 괜찮다고 함. 이유는 immer 에서 돌아가기 때문

  - createAction(ACTION) -> {type, payload}
  - createReducer([], {actionType:()=>{}, ...}) -> {type, payload}, 새로운 state를 리턴할 수 있고, state를 mutate 할 수 있음
  - configureStore({reducer}) -> redux development tools 로 state를 확인할 수 있음
  - createSlice(options) -> options:{name, initialState, reducers}, 반환받은 객체는 reducer, actions 를 사용할 수 있음
