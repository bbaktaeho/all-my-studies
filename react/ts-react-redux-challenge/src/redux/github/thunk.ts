import { Dispatch } from 'redux';
import { RootState } from '..';
import { getUserProfileAsync } from './actions';
import { getUserProfile } from '../../api/github';

export function getUserProfileThunk(username: string) {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success({ user: userProfile }));
    } catch (err) {
      dispatch(failure({ error: err }));
    }
  };
}
