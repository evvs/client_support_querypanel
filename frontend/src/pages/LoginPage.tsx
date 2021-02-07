import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import { useAuth } from '../context/authContext';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

type TabHeaderType = {
  isSelected: boolean;
};

const TabHeader = styled.p`
  &:nth-child(odd) {
    border-right: 1px solid rgba(21, 161, 242, 0.1);
  }
  flex-grow: 1;
  padding-bottom: 2px;
  text-align: center;
  font-size: 2rem;
  text-decoration: ${(props: TabHeaderType) => (props.isSelected ? 'underline' : 'none')};
  background-color: ${(props: TabHeaderType) => (props.isSelected ? '#131d27' : 'transparent')};
  &:hover,
  :focus {
    outline: none;
    background-color: rgba(21, 161, 242, 0.1);
    cursor: pointer;
  }
`;

const LoginWrapper = styled.div`
  min-height: 70vh;
  width: 30vw;

  @media (max-width: 991.98px) {
    min-height: 70vh;
    width: 50vw;
  }

  @media (max-width: 575.98px) {
    min-height: 50vh;
    width: 90vw;
  }

  display: flex;
  flex-direction: column;
  header {
    min-height: 5vh;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(21, 161, 242, 0.1);
    ${TabHeader}
  }
`;

type TabsType = 'signin' | 'signup';

const LoginPage: React.FC = () => {
  const { auth } = useAuth();

  const [currentTab, setCurrentTab] = useState<TabsType>('signin');

  if (auth) {
    return <Redirect to="/sqlpanel" />;
  }

  return (
    <Wrapper>
      <LoginWrapper>
        <header>
          <TabHeader
            onClick={() => setCurrentTab('signin')}
            isSelected={currentTab === 'signin'}
            tabIndex={0}
          >
            sign in
          </TabHeader>
          <TabHeader
            onClick={() => setCurrentTab('signup')}
            isSelected={currentTab === 'signup'}
            tabIndex={0}
          >
            sign up
          </TabHeader>
        </header>
        {currentTab === 'signin' ? <SignInForm /> : <SignUpForm />}
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginPage;
