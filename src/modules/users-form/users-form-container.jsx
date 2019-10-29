import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showModal, closeModal } from '../modals';
import { UsersForm } from './users-form';
import { UsersFormModal } from './submodules/users-form-modal';
import { USERS_FORM_MODAL_NAME, USERS_STORE_KEY } from './users-form-constants';
import { loadUsersList, removeUser } from './users-form-actions'

export const UsersFormContainer = React.memo(() => {
  const dispatch = useDispatch();
  const usersList = useSelector(state => state[USERS_STORE_KEY].usersList);

  React.useEffect(() => {
    dispatch(loadUsersList());
  }, [dispatch]);


  const handleUserDelete = (userId) => () => {
    dispatch(removeUser(userId, showModal(USERS_FORM_MODAL_NAME)));
  };

  const handleModalClose = () => {
    dispatch(closeModal(USERS_FORM_MODAL_NAME));
  };

  return (
    <React.Fragment>
      <UsersForm
        users={usersList}
        handleUserDelete={handleUserDelete}
      />
      <UsersFormModal onClose={handleModalClose} />
    </React.Fragment>
  )
});
