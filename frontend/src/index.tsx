import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import AuthProvider from './context/authContext';
import usersReducer, { User } from './redux-slices/usersSlice';
import queryReducer, { QueryError } from './redux-slices/querySlice';

export type RootState = {
  users:{
    users: {
    [key: string]: User;
  };
  usersbyid: string[];
};
  query: {
    queryInput: string;
    queryErrors: QueryError[];
  }
};

const rootReducer = {
  users: usersReducer,
  query: queryReducer,
};

const store = configureStore({ reducer: rootReducer });

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
