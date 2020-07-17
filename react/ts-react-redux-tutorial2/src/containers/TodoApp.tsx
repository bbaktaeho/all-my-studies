import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addTodo, toggleTodo, remmoveTodo } from '../store/todos';
import TodoInsert from '../components/TodoInert';
import TodoList from '../components/TodoList';

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => {
    dispatch(remmoveTodo(id));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}></TodoList>
    </>
  );
}

export default TodoApp;
