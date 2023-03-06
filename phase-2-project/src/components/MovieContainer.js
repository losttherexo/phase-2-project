import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard';

function MovieContainer ({movies}) {

    const movieArray = movies.map(movieObj => 
        <MovieCard key={movieObj.id} {...movieObj}/>
    )
    
    return (
        <div>
            {movieArray}
        </div>
    )
}

export default MovieContainer;