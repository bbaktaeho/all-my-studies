import React from 'react';
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0px;

  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem() {
  return (
    <TodoItemContainer>
      <CheckCircle>
        <MdDone></MdDone>
      </CheckCircle>
      <Text>fsdf</Text>
      <Remove>
        <MdDelete></MdDelete>
      </Remove>
    </TodoItemContainer>
  );
}

export default TodoItem;
