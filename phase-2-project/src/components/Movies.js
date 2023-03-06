import React, {useState, useEffect} from 'react'
import MovieContainer from './MovieContainer';

function Movies () {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/movies')
        .then(r => r.json())
        .then(setMovies)}, []
    )

    return (
        <div>
            <MovieContainer movies={movies}/>
        </div>
    )
}

export default Movies;