import { useEffect, useState } from 'react';
import style from './nav.module.css';
import { Link } from 'react-router';

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
              <li>
                <Link to={'/aboutme'}>
                  <p>About me</p>
                </Link>
              </li>
              <li>
                <Link to={'/contactdetails'}>
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <Link to={'/resources'}>
                  <p>Free Resources</p>
                </Link>
              </li>
              <li>
                <Link to={'/bookappt'}>
                  <p>Book Chat</p>
                </Link>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <ul className={style.optionContainermenuContainerNormal}>
            <li>
              <Link to={'/aboutme'}>
                <p>About me</p>
              </Link>
            </li>
            <li>
              <Link to={'/contactdetails'}>
                <p>Contact</p>
              </Link>
            </li>
            <li>
              <Link to={'/resources'}>
                <p>Free Resources</p>
              </Link>
            </li>
            <li>
              <Link to={'/bookappt'}>
                <p>Book Chat</p>
              </Link>
            </li>
          </ul>
        </>
      );
    }
  };

  return (
    <header className={style.header}>
      <Link to={'/'}>
        <div className={style.logoContainer}>Logo</div>
      </Link>
      <nav className={style.navContainer}>{renderNav()}</nav>
    </header>
  );
};

export default Nav;
