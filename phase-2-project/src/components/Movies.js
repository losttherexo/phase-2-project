import React, {useState, useEffect} from 'react'
import MovieContainer from './MovieContainer';

function Movies () {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/movies')
        .then(r => r.json())
        .then(setMovies)}, []
    )
    function onAddMovie(newMovie){
        setMovies([...movies, newMovie])

    }
 

    return (
        <div className='moviePage bg-gradient-to-b from-stone-400 to-zinc-700'>
            <MovieContainer onAddMovie= {onAddMovie} movies={movies} />
        </div>
    )
}

export default Movies;