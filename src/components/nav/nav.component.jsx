import { useEffect, useState } from 'react';
import style from './nav.module.css';

import { RiMenuLine, RiMenuUnfold4Line } from 'react-icons/ri';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const handleManuClick = () => {
    setIsMenuOpen((prevState) => {
      return !prevState;
    });
  };

  const renderNav = () => {
    if (width < 768) {
      return (
        <>
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
        </>
      );
    } else {
      return (
        <>
          <ul className={style.optionContainermenuContainerNormal}>
            <li>About me</li>
            <li>Contact</li>
            <li>Free Resources</li>
            <li>Book Chat</li>
          </ul>
        </>
      );
    }
  };

  return (
    <header className={style.header}>
      <div className={style.logoContainer}>Logo</div>
      <nav className={style.navContainer}>{renderNav()}</nav>
    </header>
  );
};

export default Nav;
