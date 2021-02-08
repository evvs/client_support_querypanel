import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';

const HomeWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const HomePage: React.FC = () => (
  <HomeWrapper>
    <Navigation />
  </HomeWrapper>
);

export default HomePage;
