import { SHOW_MODAL, CLOSE_MODAL } from './modals-constants';

export const showModal = (name) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: name,
  });
};

export const closeModal = (name) => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
    payload: name,
  });
};
