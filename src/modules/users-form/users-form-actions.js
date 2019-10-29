import { UsersModel } from '../../models/users-model';
import { asyncBlocker } from '../async-blocker';
import { SET_USERS } from './users-form-constants';

export const loadUsersList = () => async dispatch => {
  const usersList = await asyncBlocker(UsersModel.fetchUsers(), dispatch);

  dispatch({
    type: SET_USERS,
    payload: usersList
  })
};

export const removeUser = (userId, callback) => async dispatch => {
  const updatedUsersList = await asyncBlocker(UsersModel.removeUser(userId), dispatch);

  if (callback) {
    dispatch(callback);
  }

  dispatch({
    type: SET_USERS,
    payload: updatedUsersList
  })
};
