import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginPage: React.FC = () => (
  <Wrapper>
    <div>Hello</div>
  </Wrapper>
);

export default LoginPage;
