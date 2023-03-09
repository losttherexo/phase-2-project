import React from 'react'

function DinoCard ({data, displayDino}) {
    //<Link to={`/dinos/${dino.name}`}>{dino.name}</Link>//
    //const match = useMatch();
    const {name, image} = data;

    const handleClick = () => {
        console.log('helloWOrld', name)
        displayDino(data)
    }

    return (
        <div onClick={handleClick} className='flex flex-col m-4 w-72 h-56 justify-center movieCard rounded'>
            <h1 className='font-medium text-center m-3'>{name}</h1>
            <img className='self-center h-28' src={image} alt={name}></img>
        </div>
    )
}

export default DinoCard;