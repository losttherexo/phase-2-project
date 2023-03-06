import React from 'react'
import LikeButton from './LikeButton';

function MovieCard ({title, image, director, summary, id, likes}) {


    return (
        <div>
            <h1>{title}</h1>
            <img src={image}></img>
            <h3>{director}</h3>
            <p>{summary}</p>
            <LikeButton likes={likes} id={id} />
        </div>
    )
}

export default MovieCard;