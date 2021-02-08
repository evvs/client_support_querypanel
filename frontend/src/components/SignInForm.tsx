import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import LoginInput from './inputs/LoginInput';
import Button from './buttons/Button';
import { useHttp } from '../hooks/useHttp';
import { useAuth } from '../context/authContext';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

type resType = {
  data: {
    token: string;
  };
};

const SignInForm: React.FC = () => {
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit } = useForm();

  const {
    request, errors, clearErrors, loading,
  } = useHttp();

  const { setAuth } = useAuth();

  const loginHandler = async (data: Record<string, unknown>): Promise<void> => {
    clearErrors();
    const res = (await request('/auth/login', 'post', data)) as resType;
    localStorage.setItem('token', res.data.token);
    setAuth(true);
  };

  return (
    <Form onSubmit={handleSubmit((data) => loginHandler(data))}>
      <LoginInput
        placeholder="Login"
        type="text"
        ref={(ref) => {
          inputRef.current = ref;
          register(ref);
        }}
        name="login"
      />
      <LoginInput
        placeholder="Password"
        type="password"
        ref={register}
        name="password"
      />
      <div>
        <Button size="m" type="submit" style={{ marginTop: '20px' }} disabled={loading}>
          Submit
        </Button>
        {errors}
      </div>
    </Form>
  );
};

export default SignInForm;
