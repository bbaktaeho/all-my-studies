import React from 'react';
// import Greetings from './Greetings';
// import Counter from './Counter';
// import MyForm from './MyForm';
// import Counter2 from './Counter2';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

// function App() {
//   // const onClick = (name: string) => {
//   //   console.log(name);
//   // };
//   // return <Greetings name="bbaktaeho" onClick={onClick}></Greetings>;
//   // return <Counter></Counter>;

// }

const App: React.FC = () => {
  //   const onSubmit = (form: { name: string; description: string }) => {
  //     console.log(form);
  //   };
  //   return <MyForm onSubmit={onSubmit}></MyForm>;
  // return <Counter2></Counter2>;
  return (
    <SampleProvider>
      <ReducerSample></ReducerSample>
    </SampleProvider>
  );
};

export default App;
