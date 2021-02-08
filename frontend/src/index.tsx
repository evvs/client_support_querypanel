import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import AuthProvider from './context/authContext';
import usersReducer from './redux-slices/usersSlice';

const rootReducer = {
  users: usersReducer,
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
