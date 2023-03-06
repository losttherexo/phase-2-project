import React from 'react'
import { Link, useParams, useMatch } from 'react-router-dom';

function DinoCard ({data: {name, image, diet, habitat, location, funFact}}) {
    //<Link to={`/dinos/${dino.name}`}>{dino.name}</Link>//
    const match = useMatch();

    return (
        <div className={'dinoCard'}>
            <div>
            <Link to={`/dinos/${name}`}>{name}</Link>
            </div>
            <img className='DinoImage' src={image} alt={name}></img>
        </div>
    )


}

export default DinoCard;