import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faUser,
  faThList,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import { useAuth } from '../../context/authContext';
import s from './styles.module.scss';

const Navbar: React.FC = () => {
  const { setAuth } = useAuth();
  const { pathname } = useLocation();

  const signOutHandler = () => {
    setAuth(false);
    localStorage.removeItem('token');
  };

  const linkStyles = (linkname: string): string => {
    return cn(s.link, {
      [s.selected_tab]: linkname === pathname,
    });
  };

  return (
    <aside className={s.navbar}>
      <ul className={s['links-container']} role="navigation" aria-label="Main">
        <li>
          <Link to="/query">
            <div className={linkStyles('/query')}>
              <FontAwesomeIcon icon={faDatabase} />
              {' Query'}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/logs">
            <div className={linkStyles('/logs')}>
              <FontAwesomeIcon icon={faThList} />
              {' Logs'}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <div className={linkStyles('/users')}>
              <FontAwesomeIcon icon={faUser} />
              {' Users'}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/tools">
            <div className={linkStyles('/tools')}>
              <FontAwesomeIcon icon={faCog} />
              {' Tools'}
            </div>
          </Link>
        </li>
      </ul>
      <button
        className={s.sign_out_btn}
        type="button"
        onClick={signOutHandler}
        title="Sign out"
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </aside>
  );
};

export default Navbar;
