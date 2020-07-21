import React from 'react';
import GithubUsernameForm from '../components/GithubUsernameForm';
import GithubProfileInfo from '../components/GithubProfileInfo';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import { getUserProfileThunk } from '../redux/github';

export default function () {
  const { loading, data, error } = useSelector((state: RootState) => state.github.userProfile);
  const dispatch = useDispatch();
  const onsubmitUsername = (username: string) => {
    dispatch(getUserProfileThunk(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onsubmitUsername} />
      {loading ? (
        <p>로딩 중</p>
      ) : error ? (
        <p>에러 발생</p>
      ) : (
        data && (
          <GithubProfileInfo
            name={data.name}
            bio={data.bio}
            blog={data.blog}
            img={data.avatar_url}
          />
        )
      )}
    </>
  );
}
