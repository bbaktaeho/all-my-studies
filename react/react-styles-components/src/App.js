import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    setDialog(false);
  };

  const onCancel = () => {
    setDialog(false);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#496087',
          pink: '#f06595',
        },
      }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large" onClick={onClick}>
              삭제
            </Button>
            <Button color="gray" size="medium">
              Button
            </Button>
            <Button color="pink" size="medium">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large">Button</Button>
            <Button color="gray" size="medium">
              Button
            </Button>
            <Button color="pink" size="medium">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large">Button</Button>
            <Button color="gray" size="medium">
              Button
            </Button>
            <Button color="pink" size="medium">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" outline>
              Button
            </Button>
            <Button color="gray" outline size="medium">
              Button
            </Button>
            <Button color="pink" size="medium" outline>
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" fullWidth>
              Button
            </Button>
            <Button color="gray" size="large" fullWidth>
              Button
            </Button>
            <Button color="pink" size="large" fullWidth>
              Button
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="삭제할거냐?"
          confirmText="삭제"
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          데이터삭제할거냐?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
