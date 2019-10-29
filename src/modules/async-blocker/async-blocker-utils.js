import { showAsyncBlocker, closeAsyncBlocker } from './async-blocker-actions';

export const asyncBlocker = async (action, dispatch) => {
  dispatch(showAsyncBlocker());
  const actionResponse = await action;
  dispatch(closeAsyncBlocker());

  return new Promise(res => res(actionResponse));
};
