import { combineReducers } from 'redux';
import { modalsReducer, MODALS_STORE_KEY } from '../modules/modals';
import { usersFormReducer, USERS_STORE_KEY } from '../modules/users-form';
import { asyncBlockerReducer, ASYNC_BLOCKER_STORE_KEY } from '../modules/async-blocker';

export const reducers = combineReducers({
  [ASYNC_BLOCKER_STORE_KEY]: asyncBlockerReducer,
  [MODALS_STORE_KEY]: modalsReducer,
  [USERS_STORE_KEY]: usersFormReducer
});
