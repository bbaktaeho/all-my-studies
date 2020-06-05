import React from 'react';

// props.children
// 내부에 자식 컴포넌트 받기
function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: 16,
    };

    return <div style={style}>{children}</div>;
}

export default Wrapper;
