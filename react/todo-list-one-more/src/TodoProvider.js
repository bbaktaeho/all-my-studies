import React, { createContext, useReducer, useContext, useRef } from 'react';

// 기본 데이터 만들기
const initialState = [
  {
    id: 1,
    text: 'test1',
    done: false,
  },
  {
    id: 2,
    text: 'test2',
    done: false,
  },
  {
    id: 3,
    text: 'test3',
    done: false,
  },
  {
    id: 4,
    text: 'test4',
    done: false,
  },
];

// 리듀서를 통한 상태관리
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      // 새로운 todo 를 추가 action: {todo: ...}
      return state.concat(action.todo);
    case 'TOGGLE':
      // 기존 todo에서 속성 변경 action: {id: ...}
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'REMOVE':
      // 기존 state에서 todo 삭제 action: {id: ...}
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

// Context API 로 전역 상태 관리하기
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 커스텀 훅
function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw new Error('Connot find TodoOrovider');
  return context;
}

function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) throw new Error('Connot find TodoOrovider');
  return context;
}

function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) throw new Error('Connot find TodoOrovider');
  return context;
}

export { TodoProvider, useTodoState, useTodoDispatch, useTodoNextId };
