import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Repos Viewer</h1>
    <FontAwesomeIcon className="header__icon" icon={faGithub} />
  </header>
);

export default Header;