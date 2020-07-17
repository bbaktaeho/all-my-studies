import { createAction, createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

// TODO: ACTION
export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// TODO: CREATE ACTION
// export const getUesrProfile = createAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = createAction(GET_USER_PROFILE_SUCCESS)<GithubProfile>();
// export const getUserProfileError = createAction(GET_USER_PROFILE_ERROR)<AxiosError>();
export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE, // request
  GET_USER_PROFILE_SUCCESS, // success
  GET_USER_PROFILE_ERROR, // failure
)<undefined, GithubProfile, AxiosError>();
