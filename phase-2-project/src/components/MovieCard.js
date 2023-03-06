import React from 'react'

function MovieCard ({title, image, director, summary}) {


    return (
        <div>
            <h1>{title}</h1>
            <img src={image}></img>
            <h3>{director}</h3>
            <p>{summary}</p>
        </div>
    )
}

export default MovieCard;