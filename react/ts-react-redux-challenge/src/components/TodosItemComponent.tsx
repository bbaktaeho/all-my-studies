import React, { CSSProperties } from 'react';
import { Todo } from '../redux/todos';

type TodosItemComponentProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodosItemComponent({ todo, onToggle, onRemove }: TodosItemComponentProps) {
  const textStyle: CSSProperties = {
    textDecoration: todo.isComplete ? 'line-through' : 'none',
  };
  const removeStyle: CSSProperties = {
    color: 'red',
    marginLeft: 8,
  };

  return (
    <li>
      <span style={textStyle} onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <span style={removeStyle} onClick={() => onRemove(todo.id)}>
        (X)
      </span>
    </li>
  );
}
