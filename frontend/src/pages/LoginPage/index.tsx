/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import cn from 'classnames';

import s from './styles.module.scss';
import { useAuth } from '../../context/authContext';
import SignUpForm from '../../components/forms/SignUp';
import SignInForm from '../../components/forms/SignIn';

type TabsType = 'signin' | 'signup';

const LoginPage: React.FC = () => {
  const { auth } = useAuth();
  const [currentTab, setCurrentTab] = useState<TabsType>('signin');

  if (auth) {
    return <Redirect to="/query" />;
  }

  const signInClasses = cn(s.tab, {
    [s.current_tab]: currentTab === 'signin',
  });
  const signUpClasses = cn(s.tab, {
    [s.current_tab]: currentTab === 'signup',
  });

  return (
    <main className={s.container}>
      <div className={s.wrapper}>
        <header className={s.header_container}>
          <h2 className={signInClasses} onClick={() => setCurrentTab('signin')} tabIndex={0}>
            Sign In
          </h2>
          <h2 className={signUpClasses} onClick={() => setCurrentTab('signup')} tabIndex={0}>
            Sign Up
          </h2>
        </header>
        {currentTab === 'signin' ? <SignInForm /> : <SignUpForm />}
      </div>
    </main>
  );
};

export default LoginPage;
