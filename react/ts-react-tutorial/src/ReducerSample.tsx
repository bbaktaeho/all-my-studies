import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

// reducer는 state 타입을 반환해야함
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.count };
    case 'SET_TEXT':
      return { ...state, text: action.text };
    case 'SET_COLOR':
      return { ...state, color: action.color };
    case 'TOGGLE_GOOD':
      return { ...state, isGood: !state.isGood };

    default:
      throw new Error('Unhandled action type');
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' });
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'yellow' });
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <div>
      <p>
        <code>count: {state.count}</code>
      </p>
      <p>
        <code>count: {state.text}</code>
      </p>
      <p>
        <code>count: {state.color}</code>
      </p>
      <p>
        <code>count: {state.isGood ? 'true' : 'false'}</code>
      </p>
      <div>
        <button onClick={setCount}>set count</button>
        <button onClick={setText}>set text</button>
        <button onClick={setColor}>set color</button>
        <button onClick={toggleGood}>toggle good</button>
      </div>
    </div>
  );
}

export default ReducerSample;
