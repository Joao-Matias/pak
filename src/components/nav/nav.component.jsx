import { useEffect, useState } from 'react';
import style from './nav.module.css';
import { Link } from 'react-router';

import { RiMenuLine, RiMenuUnfold4Line } from 'react-icons/ri';

const Nav = (props) => {
  const { setActivePage } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => {
      return !prevState;
    });
  };

  const handleChangingPage = (newPage) => {
    setActivePage(newPage);
  };

  const renderNav = () => {
    if (width < 768) {
      return (
        <>
          {!isMenuOpen ? (
            <RiMenuLine className={style.menuIcon} onClick={handleMenuClick} />
          ) : (
            <RiMenuUnfold4Line className={style.menuIconOpen} onClick={handleMenuClick} />
          )}
          <div className={style.menuContainer}>
            <ul className={!isMenuOpen ? style.optionContainer : style.optionContainerOpened}>
              <li>
                <Link
                  to={'/aboutme'}
                  onClick={() => {
                    handleChangingPage('/aboutme');
                  }}
                >
                  <p>About me</p>
                </Link>
              </li>
              <li>
                <Link
                  to={'/contactdetails'}
                  onClick={() => {
                    handleChangingPage('/contactdetails');
                  }}
                >
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <Link
                  to={'/resources'}
                  onClick={() => {
                    handleChangingPage('/resources');
                  }}
                >
                  <p>Free Resources</p>
                </Link>
              </li>
              <li>
                <Link
                  to={'/bookappt'}
                  onClick={() => {
                    handleChangingPage('/bookappt');
                  }}
                >
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
              <Link
                to={'/aboutme'}
                onClick={() => {
                  handleChangingPage('/aboutme');
                }}
              >
                <p>About me</p>
              </Link>
            </li>
            <li>
              <Link
                to={'/contactdetails'}
                onClick={() => {
                  handleChangingPage('/contactdetails');
                }}
              >
                <p>Contact</p>
              </Link>
            </li>
            <li>
              <Link
                to={'/resources'}
                onClick={() => {
                  handleChangingPage('/resources');
                }}
              >
                <p>Free Resources</p>
              </Link>
            </li>
            <li>
              <Link
                to={'/bookappt'}
                onClick={() => {
                  handleChangingPage('/bookappt');
                }}
              >
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
      <Link
        to={'/'}
        onClick={() => {
          handleChangingPage('/');
        }}
      >
        <div className={style.logoContainer}>Logo</div>
      </Link>
      <nav className={style.navContainer}>{renderNav()}</nav>
    </header>
  );
};

export default Nav;
