import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NoMatchPage from '../pages/NoMatchPage';
import { useAuth } from '../context/authContext';

const Router: React.FC = () => {
  const { auth } = useAuth();

  return (
    <Switch>
      <PrivateRoute path="/" exact>
        <HomePage />
      </PrivateRoute>
      <Route path="/login" exact>
        {auth ? <Redirect to="/" /> : <LoginPage />}
      </Route>
      <Route>
        <NoMatchPage />
      </Route>
    </Switch>
  );
};

export default Router;
