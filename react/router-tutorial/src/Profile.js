import React from 'react';

const porfileData = {
  bbak1: {
    name: 'teaho',
    description: 'sdfsdfsf',
  },
  bbak2: {
    name: 'teaho',
    description: 'sdfsdfsffsdfsd',
  },
};

// 컴포넌트를 라우트로 사용하게 된다면 match 프롭스를 자동으로 받아옴
// url 파라미터를 사용할 때
function Profile({ match }) {
  const { name } = match.params;
  const profile = porfileData[name];

  if (!profile) return <div>존재하지 않는 사용자</div>;

  return (
    <div>
      <h3>
        {name} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
