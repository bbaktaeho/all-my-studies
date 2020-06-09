import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoProvider';

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
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onOpen = () => {
    setOpen((prev) => !prev);
  };

  const onChangeInputValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: { id: nextId.current, text: value, done: false },
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormContainer>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="입력 후 엔터"
              value={value}
              onChange={onChangeInputValue}
            ></Input>
          </InsertForm>
        </InsertFormContainer>
      )}
      <CircleButton onClick={onOpen} open={open}>
        <MdAdd></MdAdd>
      </CircleButton>
    </>
  );
}

export default TodoCreate;
