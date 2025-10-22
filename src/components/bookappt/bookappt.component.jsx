import 'react-calendar/dist/Calendar.css';
import style from './bookappt.module.css';
import Calendar from 'react-calendar';

const Bookappt = () => {
  return (
    <main className={style.main}>
      <h1>BOOKAPPT</h1>
      <Calendar />
    </main>
  );
};

export default Bookappt;
