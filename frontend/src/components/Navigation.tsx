import React from 'react';
import styled from 'styled-components';
import {
  faDatabase, faUser, faThList, faCog,
} from '@fortawesome/free-solid-svg-icons';

import NavigationLink from './NavigationLink';

const NavWrapper = styled.aside`
  flex-basis: 5%;
  background-color: #111922;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
`;

const Navigation: React.FC = () => {
  return (
    <NavWrapper>
      <NavigationLink linkto="query" linktext="Qwery" icon={faDatabase} />
      <NavigationLink linkto="logs" linktext="Logs" icon={faThList} />
      <NavigationLink linkto="users" linktext="Users" icon={faUser} />
      <NavigationLink linkto="Tools" linktext="Tools" icon={faCog} />
    </NavWrapper>
  );
};

export default Navigation;
