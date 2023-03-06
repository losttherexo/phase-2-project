import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard';
import NavBar from './NavBar';

function MovieContainer ({movies}) {

    const movieArray = movies.map(movieObj => 
        <MovieCard key={movieObj.id} {...movieObj}/>
    )
    
    return (
        <div>
            <NavBar />
            {movieArray}
        </div>
    )
}

export default MovieContainer;