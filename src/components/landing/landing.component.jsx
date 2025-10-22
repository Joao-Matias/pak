import style from './landing.module.css';
import heroImg from '../../../img/face.jpeg';

const Landing = () => {
  return (
    <section className={style.heroContainer}>
      <div className={style.faceImgBox}>
        <img src={heroImg} className={style.faceImg} />
      </div>
      <div className={style.quoteContainer}>
        <p className={style.quote}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat expedita praesentium tempore aut
          rem libero deserunt officia laudantium, incidunt animi fuga consectetur repudiandae. Commodi a officiis
          excepturi aperiam at.
        </p>
      </div>
    </section>
  );
};

export default Landing;
