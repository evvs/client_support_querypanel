import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import LoginInput from './inputs/LoginInput';
import Button from './buttons/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignUpForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Form>
      <LoginInput placeholder="Name" type="text" ref={inputRef} />
      <LoginInput placeholder="Login" type="text" />
      <LoginInput placeholder="Password" type="password" />
      <div>
        <Button size="m" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;
