import React, { useState, ChangeEvent, FormEvent } from 'react';

type TodosInputComponentProps = {
  onInsert: (text: string) => void;
};

export default function TodosInputComponent({ onInsert }: TodosInputComponentProps) {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue('');
    onInsert(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일을 등록하세요" value={value} onChange={onChange}></input>
      <button type="submit">등록</button>
    </form>
  );
}
