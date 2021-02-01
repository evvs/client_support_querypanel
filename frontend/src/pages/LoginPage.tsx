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
  // border: solid 1px white;
  display: flex;
  flex-direction: column;
  header {
    min-height: 5vh;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(21, 161, 242, 0.1);
    p {
      &:nth-child(odd) {
        border-right: 1px solid rgba(21, 161, 242, 0.1);
      }
      flex-grow: 1;
      padding-bottom: 2px;
      text-align: center;
      font-size: 2rem;
      text-decoration: underline;
      &:hover {
        background-color: rgba(21, 161, 242, 0.1);
        cursor: pointer;
      }
    }
  }
`;

const LoginPage: React.FC = () => {
  // const { setAuth, auth } = useAuth();

  return (
    <Wrapper>
      <LoginWrapper>
        <header>
          <p>sign in</p>
          <p>sign up</p>
        </header>
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginPage;
