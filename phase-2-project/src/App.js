import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import DinoCard from './components/DinoCard';
import DinoContainer from './components/DinoContainer';
import Dinos from './components/Dinos';
import MovieCard from './components/MovieCard';
import MovieContainer from './components/MovieContainer';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/dinos' element={<Dinos />}/>
      <Route exact path='/movies' element={<Movies />}/>
      <Route exact path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
