import React from 'react';
import styled from 'styled-components';

import Button from '../components/buttons/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;
`;

const P = styled.p`
  margin-bottom: 1rem;
`;

const NoMatch: React.FC = () => (
  <Wrapper>
    <P>404 Not found</P>
    <Button type="button">Home</Button>
  </Wrapper>
);

export default NoMatch;
