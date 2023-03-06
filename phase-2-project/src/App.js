
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
        <Route path='/' >
          <Route index element={<Home />}/>
          <Route path='dinos'>
            <Route index element={<Dinos />} />
            <Route path=':name' element={<h1>Hello!</h1>} />
          </Route>
          
        </Route>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/about' element={<About />} />
      </Routes>
    </>

  );
}

export default App;
