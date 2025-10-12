import { useState } from 'react';
import style from './nav.module.css';

import { RiMenuLine, RiMenuUnfold4Line } from 'react-icons/ri';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleManuClick = () => {
    setIsMenuOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <nav className={style.navContainer}>
      {!isMenuOpen ? (
        <RiMenuLine className={style.menuIcon} onClick={handleManuClick} />
      ) : (
        <RiMenuUnfold4Line className={style.menuIconOpen} onClick={handleManuClick} />
      )}
      <div className={style.menuContainer}>
        <ul className={!isMenuOpen ? style.optionContainer : style.optionContainerOpened}>
          <li>About me</li>
          <li>Contact</li>
          <li>Free Resources</li>
          <li>Book Chat</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
