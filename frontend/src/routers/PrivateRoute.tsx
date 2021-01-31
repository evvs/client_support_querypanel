/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../context/authContext';

type PrivateRouteType = {
  path: string,
  exact: boolean,
}

const PrivateRoute: React.FC<PrivateRouteType> = ({ children, ...rest }) => {
  const { auth } = useAuth();

  return (
    <Route {...rest} render={() => (auth ? (children) : (<Redirect to="/login" />))} />
  );
};

export default PrivateRoute;
