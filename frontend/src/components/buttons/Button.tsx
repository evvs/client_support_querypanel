import styled from 'styled-components';
import { paddingAndFontSize } from './sizes';

export default styled.button`
  ${paddingAndFontSize};
  background: transparent;
  border-color: rgb(29, 161, 242);
  border-style: solid;
  color: rgb(29, 161, 242);
  cursor: pointer;
  border-radius: 2rem;
  font-weight: bold;

  &:hover,
  :focus {
    outline: none;
    background-color: rgba(21, 161, 242, 0.1);
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
