import React from 'react';
import qs from 'qs';
// 쿼리스트링을 사용할 때 location
function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>fsdfsdfs</p>
      {detail && <div>adfafdfadfafdfadfdafdf</div>}
    </div>
  );
}

export default About;
