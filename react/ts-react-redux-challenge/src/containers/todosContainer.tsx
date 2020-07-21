import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import { createADD_TODO, createREMOVE_TODO, createTOGGLE_TODO } from '../redux/todos';
import TodosInputComponent from '../components/TodosInputcomponent';
import TodosListComponent from '../components/TodosListComponent';

export default function TodosContainer() {
  const { todos } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(createADD_TODO({ text }));
  };

  const onRemove = (id: number) => {
    dispatch(createREMOVE_TODO({ id }));
  };

  const onToggle = (id: number) => {
    dispatch(createTOGGLE_TODO({ id }));
  };

  return (
    <>
      <TodosInputComponent onInsert={onInsert}></TodosInputComponent>
      <TodosListComponent
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodosListComponent>
    </>
  );
}
