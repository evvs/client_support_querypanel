/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { paddingSizes, StyledBtnSizeProp, fontSizes } from './sizes';

const Span = styled.span`
  background: transparent;
  border-color: rgb(29, 161, 242);
  border-style: solid;
  color: rgb(29, 161, 242);
  cursor: pointer;
  border-radius: 2rem;
  padding: ${(props: StyledBtnSizeProp) => (props.size ? paddingSizes[props.size] : paddingSizes.m)};
  font-size: ${(props: StyledBtnSizeProp) => (props.size ? fontSizes[props.size] : fontSizes.m)};
  font-weight: bold;
  text-decoration: none;

  &:hover,
  :focus {
    outline: none;
    background-color: rgba(21, 161, 242, 0.1);
    box-shadow: rgb(142 208 249) 0px 0px 0px 2px;
  }
`;

const LinkBtn: React.FC<StyledBtnSizeProp> = ({ children, size }) => (
  <Link to="/" style={{ textDecoration: 'none' }}>
    <Span size={size}>{children}</Span>
  </Link>
);

export default LinkBtn;
