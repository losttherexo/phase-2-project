
import './App.css';
import Home from './components/Home';
import About from './components/About';

import Dinos from './components/Dinos';

import Movies from './components/Movies';
import NavBar from './components/NavBar';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dinos' element={<Dinos />}/>
        <Route exact path='/movies' element={<Movies />}/>
        <Route exact path='/about' element={<About />} />
      </Routes>
    </>

  );
}

export default App;
