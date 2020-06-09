import React from 'react';
import styled from 'styled-components';

const TodoTemplateContainer = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  /* ? 좌, 우 가운데 정렬 */
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateContainer>{children}</TodoTemplateContainer>;
}

export default TodoTemplate;
