import React from 'react'
import LikeButton from './LikeButton';

function MovieCard ({title, image, director, summary, id, likes}) {


    return (

        <div className='flex flex-col w-80 px-8 rounded-lg movieCard'>
            <h1 className='font-bold text-center p-2 text-xl'>{title}</h1>
            <img src={image} className='flex w-64 self-center' alt={title}></img>
            <h3 className='text-center p-3 font-bold'>Directed by {director}</h3>
            <p className='text-base'>{summary}</p>
            <LikeButton likes={likes} id={id} />
        </div>
    )
}

export default MovieCard;