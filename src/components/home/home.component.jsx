import style from './home.module.css';

import Nav from '../nav';

const Home = () => {
  return (
    <main className={style.main}>
      <Nav />

      <section className={style.heroContainer}>
        <div className={style.faceImgBox}>
          <img src='../../img/face.jpeg' className={style.faceImg} />
        </div>
        <div className={style.quoteContainer}>
          <p className={style.quote}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat expedita praesentium tempore
            aut rem libero deserunt officia laudantium, incidunt animi fuga consectetur repudiandae. Commodi a officiis
            excepturi aperiam at.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
