import style from './home.module.css';
import Nav from '../nav';
import { useState } from 'react';

import Aboutme from '../aboutme';
import Bookappt from '../bookappt';
import Contactdetails from '../contactdetails';
import Resources from '../resources';
import Landing from '../landing';
import { useLocation } from 'react-router';

const Home = () => {
  const { pathname } = useLocation();
  const [activePage, setActivePage] = useState(pathname);

  return (
    <main className={style.main}>
      <Nav setActivePage={setActivePage} />

      {activePage === '/aboutme' && <Aboutme />}
      {activePage === '/bookappt' && <Bookappt />}
      {activePage === '/contactdetails' && <Contactdetails />}
      {activePage === '/resources' && <Resources />}
      {activePage === '/' && <Landing />}
    </main>
  );
};

export default Home;
