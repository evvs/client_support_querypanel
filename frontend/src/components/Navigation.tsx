import React from 'react';
import styled from 'styled-components';
import { faDatabase, faUser } from '@fortawesome/free-solid-svg-icons';

import NavigationLink from './NavigationLink';

const NavWrapper = styled.aside`
  flex-basis: 5%;
  background-color: #111922;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
`;

const Navigation: React.FC = () => {
  return (
    <NavWrapper>
      <NavigationLink linkto="query" linktext="Qwery" icon={faDatabase} />
      <NavigationLink linkto="users" linktext="Users" icon={faUser} />
    </NavWrapper>
  );
};

export default Navigation;
