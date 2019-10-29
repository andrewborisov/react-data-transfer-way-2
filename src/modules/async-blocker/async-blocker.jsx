import * as React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Dialog } from '@material-ui/core';
import { ASYNC_BLOCKER_STORE_KEY } from './async-blocker-constants';

export const AsyncBlocker = React.memo(() => {
  const showAsyncBlocker = useSelector(state => state[ASYNC_BLOCKER_STORE_KEY]);

  return (
    <Dialog open={showAsyncBlocker}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          width: '60px',
          height: '60px',
          margin: 'auto',
        },
      }}
    >
      <CircularProgress />
    </Dialog>
  )
});
