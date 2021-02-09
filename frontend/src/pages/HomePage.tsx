import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from '../components/Navigation';

const HomeWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Redirect to="/query" />,
  },
  {
    path: '/query',
    main: () => <h2>Query</h2>,
  },
  {
    path: '/logs',
    main: () => <h2>Logs</h2>,
  },
];

const HomePage: React.FC = () => (
  <HomeWrapper>
    <Navigation />
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          <route.main />
        </Route>
      ))}
    </Switch>
  </HomeWrapper>
);

export default HomePage;
