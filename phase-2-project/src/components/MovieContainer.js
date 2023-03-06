import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard';
import NavBar from './NavBar';

function MovieContainer () {

    const [movies, setMovies] = useState([])

    const movieArray = movies.map(movieObj => <MovieCard key={movieObj.id} {...movieObj}/>)
    
    useEffect(() => {
        fetch('http://localhost:3001/movies')
        .then(r => r.json())
        .then(setMovies)}, []
    )
    

    return (
        <div>
            <NavBar />
            {movieArray}
        </div>
    )
}

export default MovieContainer;