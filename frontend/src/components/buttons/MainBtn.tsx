import styled from 'styled-components';
import { paddingAndFontSize } from './sizes';

export default styled.button`
  ${paddingAndFontSize};
  background: linear-gradient(45deg, rgb(17, 25, 34), rgb(40, 42, 54));
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 16px;


  &:hover,
  :focus {
    outline: none;
    box-shadow: rgb(142 208 249) 0px 0px 0px 2px;
  }

  &:disabled {
    color: grey;
    border-color: grey;
  }
  &:disabled:hover {
    background-color: transparent;
    box-shadow: none;
    cursor: default;
  }
`;
