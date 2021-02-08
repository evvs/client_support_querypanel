import React from 'react';
import styled from 'styled-components';
import {
  faDatabase,
  faUser,
  faThList,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

import NavigationLink from './NavigationLink';
import SignOutBtn from './buttons/SignOutBtn';

const NavWrapper = styled.aside`
  flex-basis: 5%;
  background-color: #111922;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Navigation: React.FC = () => {
  return (
    <NavWrapper>
      <div>
        <NavigationLink linkto="query" linktext="Qwery" icon={faDatabase} />
        <NavigationLink linkto="logs" linktext="Logs" icon={faThList} />
        <NavigationLink linkto="users" linktext="Users" icon={faUser} />
        <NavigationLink linkto="Tools" linktext="Tools" icon={faCog} />
      </div>

      <SignOutBtn />
    </NavWrapper>
  );
};

export default Navigation;
