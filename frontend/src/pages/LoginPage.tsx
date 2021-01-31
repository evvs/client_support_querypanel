import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginWrapper = styled.div`
  min-height: 70vh;
  width: 30vw;
  border: solid 1px white;
  display: flex;
  flex-direction: column;
  header {
    min-height: 5vh;
    border: solid 1px red;
    display: flex;
    justify-content: space-around;
    p{
      padding-bottom: 2px;
      display: flex;
      align-items: flex-end;
      font-size: 2rem;
      text-decoration: underline;
    }
  }
`;

const LoginPage: React.FC = () => (
  <Wrapper>
    <LoginWrapper>
      <header>
        <p>sign in</p>
        <p>sign up</p>
      </header>
    </LoginWrapper>
  </Wrapper>
);

export default LoginPage;
