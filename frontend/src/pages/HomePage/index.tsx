import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import QueryTab from '../../components/main_tabs/QueryTab';
import s from './styles.module.scss';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Redirect to="/query" />,
  },
  {
    path: '/query',
    main: () => <QueryTab />,
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
  <div className={s.container}>
    <Navbar />
    <main className={s.main_container}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.main />
          </Route>
        ))}
      </Switch>
    </main>
  </div>
);

export default HomePage;
