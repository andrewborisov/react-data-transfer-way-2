import { TOGGLE_ASYNC_BLOCKER } from './async-blocker-constants';

export const asyncBlockerReducer = (state = false, { type, payload }) => {
  switch (type) {
    case TOGGLE_ASYNC_BLOCKER:
      return payload;
    default: return state;
  }
};
