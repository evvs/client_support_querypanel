import React from 'react';
import Router from './routers/Router';
import GlobalStyles from './GlobalStyles';

import AuthProvider from './context/authContext';

const App: React.FC = () => (
  <AuthProvider>
    <Router />
    <GlobalStyles />
  </AuthProvider>
);

export default App;
