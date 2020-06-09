import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListContainer = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  /* ? 넘칠 때 */
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListContainer>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </TodoListContainer>
  );
}

export default TodoList;
