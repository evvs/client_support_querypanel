import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NoMatchPage from '../pages/NoMatchPage';

const Router: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute path="/" exact>
        <HomePage />
      </PrivateRoute>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route>
        <NoMatchPage />
      </Route>
    </Switch>
  );
};

export default Router;
