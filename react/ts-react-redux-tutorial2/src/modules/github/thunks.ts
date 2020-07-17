import { RootState } from '..';
import { Dispatch } from 'redux';
import { getUserProfileAsync } from './actions';
import { getUserProfile } from '../../api/github';

export function getUserProfileThunk(username: string) {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (err) {
      dispatch(failure(err));
    }
  };
}
