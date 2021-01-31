/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StyledBtnSizeProp, paddingAndFontSize } from './sizes';

const Span = styled.span`
  ${paddingAndFontSize};
  background: transparent;
  border-color: rgb(29, 161, 242);
  border-style: solid;
  color: rgb(29, 161, 242);
  cursor: pointer;
  border-radius: 2rem;
  font-weight: bold;
  text-decoration: none;

  &:hover,
  :focus {
    outline: none;
    background-color: rgba(21, 161, 242, 0.1);
    box-shadow: rgb(142 208 249) 0px 0px 0px 2px;
  }
`;

interface LinkBtnProps extends StyledBtnSizeProp {
  to: string
}

const LinkBtn: React.FC<LinkBtnProps> = ({ children, size, to }) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <Span size={size}>{children}</Span>
  </Link>
);

export default LinkBtn;
