import React from 'react';
import styled from 'styled-components';

import LoginInput from './inputs/LoginInput';
import Button from './buttons/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignUpForm: React.FC = () => (
  <Form>
    <LoginInput placeholder="Name" type="text" />
    <LoginInput placeholder="Login" type="text" />
    <LoginInput placeholder="Password" type="password" />
    <Button size="m" type="submit" style={{ marginTop: '20px' }}>
      Submit
    </Button>
  </Form>
);

export default SignUpForm;
