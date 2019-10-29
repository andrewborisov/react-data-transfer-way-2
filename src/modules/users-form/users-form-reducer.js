import { SET_USERS } from './users-form-constants';

export const usersFormReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        usersList: payload
      };
    default: return state;
  }
};
