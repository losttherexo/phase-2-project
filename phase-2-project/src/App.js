import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import DinoCard from './components/DinoCard';
import DinoContainer from './components/DinoContainer';
import Dinos from './components/Dinos';
import MovieCard from './components/MovieCard';
import MovieContainer from './components/MovieContainer';
import Mvoies from './components/Movies';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
