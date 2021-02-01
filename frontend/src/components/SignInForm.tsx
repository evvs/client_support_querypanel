import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import LoginInput from './inputs/LoginInput';
import Button from './buttons/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignInForm: React.FC = () => {
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Form>
      <LoginInput placeholder="Login" type="text" ref={inputRef} />
      <LoginInput placeholder="Password" type="password" />
      <div>
        <Button size="m" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default SignInForm;
