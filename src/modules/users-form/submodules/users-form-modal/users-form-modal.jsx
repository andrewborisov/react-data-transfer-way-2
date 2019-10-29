import * as React from 'react';
import {
  Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText, Button
} from '@material-ui/core';

export const UsersFormModal = ({ isOpen, onClose }) => {
  if (isOpen) {
    return (
      <Dialog
        open={isOpen}
        onClose={onClose}
      >
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <DialogContentText>
            User was successfully deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">Close the window</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return null;
};
