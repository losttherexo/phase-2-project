import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard';

function MovieContainer () {

    const [movies, setMovies] = useState([])

    const movieArray = movies.map(movieObj => <MovieCard key={movieObj.id} {...movieObj}/>)
    
    useEffect(() => {
        fetch('http://localhost:3000/movies')
        .then(r => r.json())
        .then(setMovies)}, []
    )
    

    return (
        <div>
            {movieArray}
        </div>
    )
}

export default MovieContainer;