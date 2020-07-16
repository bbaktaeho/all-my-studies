import React from 'react';
// import Greetings from './Greetings';
// import Counter from './Counter';
import MyForm from './MyForm';

// function App() {
//   // const onClick = (name: string) => {
//   //   console.log(name);
//   // };
//   // return <Greetings name="bbaktaeho" onClick={onClick}></Greetings>;
//   // return <Counter></Counter>;

// }

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit}></MyForm>;
};

export default App;
