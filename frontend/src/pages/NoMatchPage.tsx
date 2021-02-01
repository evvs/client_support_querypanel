import React from 'react';
import styled from 'styled-components';

import LinkBtn from '../components/buttons/LinkBtn';

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
    <LinkBtn size="m" to="/">Home</LinkBtn>
  </Wrapper>
);

export default NoMatch;
