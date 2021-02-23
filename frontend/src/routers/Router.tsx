import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <PrivateRoute path="/">
        <HomePage />
      </PrivateRoute>
    </Switch>
  );
};

export default Router;
