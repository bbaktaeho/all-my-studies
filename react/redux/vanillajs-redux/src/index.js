// /**
//  * * redux
//  * ? store : 나의 data(state)를 저장하는 곳
//  *    dispatch: ƒ dispatch(action) : 리듀서를 불러서 현재 state와 내가 보낸 action을 더함
//  *    getState: ƒ getState() : 현재 state 확인하기
//  *    replaceReducer: ƒ replaceReducer(nextReducer)
//  *    subscribe: ƒ subscribe(listener) : store 변화를 알려줌
//  * ? reducer : createStore를 할 때 우린 reducer를 줘야함. reducer가 리턴하는 것은 state여야함
//  * ? action : state를 실질적으로 수정(Object type) -> reducer에게 보내줘야함
//  * todo : Store.dispatch(Object) 를 이용해서 action을 reducer에게 보낼 수 있음. 즉, dispatch를 통해서 reducer로 메세지를 보낼 수 있음
//  */

// import { createStore } from 'redux';
// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// // action
// const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';

// // action function
// const addTodo = (text) => {
//     return { type: ADD_TODO, text };
// };
// const deleteTodo = (id) => {
//     return { type: DELETE_TODO, id };
// };

// const reducer = (state = [], action) => {
//     // 새로운 state를 리턴해야함
//     // mutate state X
//     console.log(action);

//     switch (action.type) {
//         case ADD_TODO:
//             const newToDoObj = { text: action.text, id: Date.now() };
//             return [...state, newToDoObj];
//         case DELETE_TODO:
//             const cleaned = state.filter((todo) => todo.id !== parseInt(action.id));
//             return cleaned;
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer);
// const dispatchAddTodo = (text) => {
//     store.dispatch(addTodo(text));
// };
// const dispatchDeleteTodo = (e) => {
//     const id = parseInt(e.target.parentNode.id);
//     store.dispatch(deleteTodo(id));
// };

// const paintTodos = () => {
//     const todos = store.getState();
//     ul.innerHTML = ''; // 리스트 전채를 비움
//     todos.forEach((el) => {
//         // 다시 새로운 리스트를 구현
//         const li = document.createElement('li');
//         const btn = document.createElement('button');
//         btn.innerText = 'DEL';
//         btn.addEventListener('click', dispatchDeleteTodo);
//         li.id = el.id;
//         li.innerText = el.text;
//         li.appendChild(btn);
//         ul.appendChild(li);
//     });
// };

// store.subscribe(paintTodos);

// const onSubmit = (e) => {
//     e.preventDefault();
//     const todo = input.value;
//     input.value = '';
//     dispatchAddTodo(todo);
// };

// form.addEventListener('submit', onSubmit);
// // actionType
// // const ADD = 'ADD';
// // const MINUS = 'MINUS';

// // // reducer(초기state, action)
// // const countModifier = (count = 0, action) => {
// //     switch (action.type) {
// //         case ADD:
// //             return count + 1;
// //         case MINUS:
// //             return count - 1;
// //         default:
// //             return count;
// //     }
// // };
// // const countStore = createStore(countModifier);

// // const onChange = () => {
// //     number.innerText = countStore.getState();
// // };

// // // store에 변화가 있을 때마다 호출됨
// // countStore.subscribe(onChange);

// // const handleAdd = () => {
// //     countStore.dispatch({ type: ADD });
// // };

// // const handleMinus = () => {
// //     countStore.dispatch({ type: MINUS });
// // };
// // add.addEventListener('click', handleAdd);
// // minus.addEventListener('click', handleMinus);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
