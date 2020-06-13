import React from 'react';
import { withRouter } from 'react-router-dom';

function WithRouterSample({ location, match, history }) {
  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly></textarea>
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} readOnly></textarea>
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  );
}

// 이 컴포넌트가 라우터로 사용되지 않았을 때 withRouter가 그 역할을 해줌
export default withRouter(WithRouterSample);
