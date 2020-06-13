import React, { useEffect } from 'react';

function History({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    // 방문 기록을 남김
    history.push('/');
  };

  const replaceToHome = () => {
    // 방문 기록을 남기지않음
    history.replace('/');
  };

  useEffect(() => {
    console.log(history);
    // 이탈 방지 만들기
    const unblock = history.block('정말 떠나실건가요?');
    // 컴포넌트가 언마운트 될 때
    return () => {
      // 이탈 방지
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로가기</button>
      <button onClick={replaceToHome}>Replace</button>
    </div>
  );
}

export default History;
