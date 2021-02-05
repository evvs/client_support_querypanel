import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import LoginInput from './inputs/LoginInput';
import Button from './buttons/Button';
import { useHttp } from '../hooks/useHttp';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignUpForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const request = useHttp();

  const regHandler = async (data: Record<string, unknown>): Promise<void> => {
    await request('/auth/register', 'post', data);
  };

  return (
    <Form onSubmit={handleSubmit((data) => regHandler(data))}>
      <LoginInput
        placeholder="Name"
        type="text"
        ref={(ref) => {
          inputRef.current = ref;
          register(ref);
        }}
        name="name"
      />
      <LoginInput placeholder="Login" type="text" ref={register} name="login" />
      <LoginInput
        placeholder="Password"
        type="password"
        name="password"
        ref={register}
      />
      <div>
        <Button size="m" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;
