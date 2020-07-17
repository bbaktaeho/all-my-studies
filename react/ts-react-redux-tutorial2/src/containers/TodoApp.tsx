import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addTodo, toggleTodo, removeTodo } from '../modules/todos';
import TodoInsert from '../components/TodoInert';
import TodoList from '../components/TodoList';

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}></TodoList>
    </>
  );
}

export default TodoApp;
