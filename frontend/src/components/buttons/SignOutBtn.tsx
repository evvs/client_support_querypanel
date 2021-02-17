import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../context/authContext';

const Btn = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  height: 3rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  :focus {
    outline: none;
    background-color: rgba(21, 161, 242, 0.1);
    box-shadow: rgb(142 208 249) 0px 0px 0px 2px;
  }
`;

const SignOutBtn: React.FC = () => {
  const { setAuth } = useAuth();

  const signOutHandler = () => {
    setAuth(false);
    localStorage.removeItem('token');
  };

  return (
    <Btn type="button" onClick={signOutHandler} title="Sign out">
      <FontAwesomeIcon icon={faSignOutAlt} />
    </Btn>
  );
};

export default SignOutBtn;
