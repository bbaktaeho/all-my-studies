import React, { useState } from 'react';
// import axios from 'axios';
// import { useAsync } from 'react-async';
import User from './User';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
// async function getUsers() {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users',
//   );
//   return response.data;
// }

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { loading, data: users, error } = state.users;
  // 처음 불러올 때는 호출하지 않겠다하면 deferFn 속성에 함수를 주고 리턴값으로 run을 받는다
  // const { data: users, error, isLoading, reload, run } = useAsync({
  //   deferFn: getUsers,
  // });

  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
