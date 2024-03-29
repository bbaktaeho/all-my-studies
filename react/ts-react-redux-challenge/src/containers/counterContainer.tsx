import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import CounterComponent from '../components/CounterComponent';
import { createINCREASE, createDECREASE, createINCREASE_BY } from '../redux/counter';

export default function CounterContainer() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(createINCREASE());
  };
  const onDncrease = () => {
    dispatch(createDECREASE());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(createINCREASE_BY(diff));
  };

  return (
    <>
      <CounterComponent
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDncrease}
        onIncreaseBy={onIncreaseBy}
      />
    </>
  );
}
