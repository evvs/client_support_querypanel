import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import NoMatchPage from './pages/NoMatchPage';
import GlobalStyles from './GlobalStyles';

const App: React.FC = () => (
  <>
    <div>
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </div>
    <GlobalStyles />
  </>
);

export default App;
