import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home';
import Resources from './components/resources';
import Bookappt from './components/bookappt';
import Contactdetails from './components/contactdetails';
import Aboutme from './components/aboutme';

function App() {
  return (
    <Routes>
      <Route path='/resources' element={<Resources />} />
      <Route path='/bookappt' element={<Bookappt />} />
      <Route path='/contactdetails' element={<Contactdetails />} />
      <Route path='/aboutme' element={<Aboutme />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  );
}

export default App;
