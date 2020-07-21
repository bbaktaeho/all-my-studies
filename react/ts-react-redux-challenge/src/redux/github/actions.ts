import { createAction, createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE_REQUEST = 'github/GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// export const createGET_USER_PROFILE = createAction(GET_USER_PROFILE_REQUEST)();
// export const createGET_USER_PROFILE_SUCCESS = createAction(GET_USER_PROFILE_SUCCESS)<{
//   user: GithubProfile;
// }>();
// export const createGET_USER_PROFILE_ERROR = createAction(GET_USER_PROFILE_ERROR)<{
//   error: AxiosError;
// }>();
export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
)<undefined, { user: GithubProfile }, { error: AxiosError }>();
