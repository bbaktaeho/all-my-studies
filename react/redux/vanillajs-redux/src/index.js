/**
 * * redux
 * ? store : 나의 data(state)를 저장하는 곳
 *    dispatch: ƒ dispatch(action) : 리듀서를 불러서 현재 state와 내가 보낸 action을 더함
 *    getState: ƒ getState() : 현재 state 확인하기
 *    replaceReducer: ƒ replaceReducer(nextReducer)
 *    subscribe: ƒ subscribe(listener) : store 변화를 알려줌
 * ? reducer : createStore를 할 때 우린 reducer를 줘야함. reducer가 리턴하는 것은 state여야함
 * ? action : state를 실질적으로 수정(Object type) -> reducer에게 보내줘야함
 * todo : Store.dispatch(Object) 를 이용해서 action을 reducer에게 보낼 수 있음. 즉, dispatch를 통해서 reducer로 메세지를 보낼 수 있음
 */

import { createStore, bindActionCreators } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// actionType
const ADD = 'ADD';
const MINUS = 'MINUS';

// reducer(초기state, action)
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};
const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
};

// store에 변화가 있을 때마다 호출됨
countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
    countStore.dispatch({ type: MINUS });
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
