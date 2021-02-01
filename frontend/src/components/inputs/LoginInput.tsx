import React from 'react';
import styled from 'styled-components';

const InputGroup = styled.label`
  position: relative;
  font-size: 14px;
  padding-top: 20px;

  input {
    border: none;
    outline: none;
    appearance: none;
    background: #131d27;
    padding: 12px;
    border-radius: 3px;
    width: 100%;
  }

  span {
    position: absolute;
    left: 12px;
    top: calc(50% + 10px);
    transform: translateY(-50%);
    color: #aaa;
    transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease
  }

  input:valid + span,
  input:focus + span {
    top: 10px;
    font-size: 10px;
    color: rgb(29, 161, 242);
  }
`;

type InputType = {
  placeholder: string;
  type: string;
};

const LoginInput = React.forwardRef<HTMLInputElement, InputType>(({ placeholder, type }, ref) => (
  <InputGroup>
    <input type={type} required ref={ref} />
    <span>{placeholder}</span>
  </InputGroup>
));

export default LoginInput;
