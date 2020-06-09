import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  /* x축으로 몇, y축으로 몇 이동하겠다 */
  transform: translate(-50%, 50%);
  font-size: 60px;
  color: white;
  border-radius: 40px;
  border: none;
  outline: none;

  /* css 속성을 변경할 때 애니메이션 속도를 조절하는 방법 */
  transition: 0.125s all ease-in;
`;

const InsertFormContainer = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  return (
    <>
      <InsertFormContainer>
        <InsertForm>
          <Input></Input>
        </InsertForm>
      </InsertFormContainer>
      <CircleButton>
        <MdAdd></MdAdd>
      </CircleButton>
    </>
  );
}

export default TodoCreate;
