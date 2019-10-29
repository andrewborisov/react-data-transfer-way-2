import React from 'react';
import { Provider } from 'react-redux';
import { MainPage } from './pages/main-page';
import { AsyncBlocker } from './modules/async-blocker';
import { store } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <AsyncBlocker/>
      <MainPage />
    </Provider>
  );
};

