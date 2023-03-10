import React, {useState, useEffect} from 'react'
import MovieContainer from './MovieContainer';
import Search from './Search';

function Movies () {

    const [movies, setMovies] = useState([])
    const [searchArr, setSearchArr] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/movies')
        .then(r => r.json())
        .then(setMovies)}, []
    )
    function onAddMovie(newMovie){
        setMovies([...movies, newMovie])

    }

    const searchMovies = (query) => {
        query = query.toLowerCase();
        setSearchQuery(query);
        let tmpArr = movies.filter(movie => {
            return (movie.title.toLowerCase().includes(query) || movie.director.toLowerCase().includes(query) || movie.summary.toLowerCase().includes(query))
        })
        setSearchArr(tmpArr);
    }
 

    return (
        <div className='moviePage bg-gradient-to-b from-stone-400 to-zinc-700'>
            <Search searcher={searchMovies} />
            <MovieContainer onAddMovie= {onAddMovie} movies={searchQuery === ''? movies : searchArr} />
        </div>
    )
}

export default Movies;