import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import AuthProvider from './context/authContext';
import usersReducer from './redux-slices/usersSlice';
import queryReducer from './redux-slices/querySlice';

const rootReducer = {
  users: usersReducer,
  query: queryReducer,
};

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </Provider>,
  document.getElementById('root'),
);
