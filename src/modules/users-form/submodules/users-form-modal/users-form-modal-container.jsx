import * as React from 'react';
import { useSelector } from 'react-redux';
import { USERS_FORM_MODAL_NAME } from '../../users-form-constants';
import { UsersFormModal } from './users-form-modal';

export const UsersFormModalContainer = ({ onClose }) => {
  const showUsersFormModal = !!useSelector(state => state.modals.find(e => e === USERS_FORM_MODAL_NAME));

  return <UsersFormModal isOpen={showUsersFormModal} onClose={onClose} />
};
