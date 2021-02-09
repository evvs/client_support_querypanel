import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Query from '../components/Query';

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
    main: () => <Query />,
  },
  {
    path: '/logs',
    main: () => <h2>Logs</h2>,
  },
  {
    path: '/users',
    main: () => <h2>Users</h2>,
  },
  {
    path: '/tools',
    main: () => <h2>Tools</h2>,
  },
];

const HomePage: React.FC = () => (
  <HomeWrapper>
    <Navigation />
    <main style={{ flexGrow: 1 }}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.main />
          </Route>
        ))}
      </Switch>
    </main>
  </HomeWrapper>
);

export default HomePage;
