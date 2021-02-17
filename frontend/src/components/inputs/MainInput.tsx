import styled from 'styled-components';

export default styled.input`
  border: none;
  background: #111922;
  padding: 10px;
  width: 100%;
  outline: none;

  &:focus::placeholder {
    color: transparent;
  }

  &::placeholder{
    color: #aaa;
    transition: color 0.3s ease;
  }
`;
