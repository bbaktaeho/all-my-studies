import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button';
import Checkbox from './components/CheckBox';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <Checkbox checked={check} onChange={onChange}>
        다음 약관에 모두 동의
      </Checkbox>
    </div>
    // <div className="App">
    //   <div className="buttons">
    //     <Button size="large">BUTTON</Button>
    //     <Button>BUTTON</Button>
    //     <Button size="small">BUTTON</Button>
    //   </div>
    //   <div className="buttons">
    //     <Button color="gray" size="large">
    //       BUTTON
    //     </Button>
    //     <Button color="gray">BUTTON</Button>
    //     <Button color="gray" size="small">
    //       BUTTON
    //     </Button>
    //   </div>
    //   <div className="buttons">
    //     <Button color="mycolor" size="large">
    //       BUTTON
    //     </Button>
    //     <Button color="mycolor">BUTTON</Button>
    //     <Button color="mycolor" size="small">
    //       BUTTON
    //     </Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" outline>
    //       BUTTON
    //     </Button>
    //     <Button color="gary" outline>
    //       BUTTON
    //     </Button>
    //     <Button color="mycolor" outline size="small">
    //       BUTTON
    //     </Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" fullWidth>
    //       BUTTON
    //     </Button>
    //     <Button color="gary" size="large" fullWidth>
    //       BUTTON
    //     </Button>
    //     <Button
    //       color="mycolor"
    //       fullWidth
    //       size="large"
    //       onClick={() => {
    //         console.log('클릭');
    //       }}
    //       onMouseMove={() => {
    //         console.log('마우스 움직임');
    //       }}
    //     >
    //       BUTTON
    //     </Button>
    //   </div>
    // </div>
  );
}

export default App;
