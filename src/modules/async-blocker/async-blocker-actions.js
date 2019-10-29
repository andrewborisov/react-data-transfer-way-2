import { TOGGLE_ASYNC_BLOCKER } from './async-blocker-constants';

export const showAsyncBlocker = () => dispatch => {
  dispatch({
    type: TOGGLE_ASYNC_BLOCKER,
    payload: true,
  })
};

export const closeAsyncBlocker = () => dispatch => {
  dispatch({
    type: TOGGLE_ASYNC_BLOCKER,
    payload: false,
  })
};
