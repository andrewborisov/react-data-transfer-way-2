import {SHOW_MODAL, CLOSE_MODAL} from './modals-constants';

export const modalsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return [...state, payload];
    case CLOSE_MODAL: {
      const newState = [...state];
      return newState.filter(el => el !== payload);
    }
    default: return state;
  }
};
