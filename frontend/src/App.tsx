import React from 'react';
import Router from './routers/Router';
import GlobalStyles from './GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
};

export default App;
