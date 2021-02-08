import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.aside`
  flex-basis: 10%;
  background-color: #111922;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
`;

const Navigation: React.FC = () => {
  return <NavWrapper />;
};

export default Navigation;
