import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';

// react-async 의 useAsync 를 사용하려면 promiseFn 에 오는 함수의 파라미터는 객체가 와야한다

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { loading, data: user, error } = state.user;

  // 컴포넌트를 처음 호출할 때는 getUser 에다가 id 를 넣어서 호출하게 됨
  // 나중에 id 값이 바뀌면 다시 이것을 호출하는 속성이 watch 다!

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default User;
