import React from 'react';
import { Todo } from '../redux/todos';
import TodosItemComponent from './TodosItemComponent';

type TodoListComponentProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodosListComponent({ todos, onToggle, onRemove }: TodoListComponentProps) {
  return (
    <ul>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <TodosItemComponent
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          ></TodosItemComponent>
        ))
      ) : (
        <p>일정이 없습니다.</p>
      )}
    </ul>
  );
}
