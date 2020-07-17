import React, { useReducer } from 'react';
import { useSampleState, useSampleDispatch } from './SampleContext';

function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

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
