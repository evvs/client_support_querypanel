import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import GlobalStyles from './GlobalStyles';

const App: React.FC = () => (
  <>
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
    <GlobalStyles />
  </>
);

export default App;
