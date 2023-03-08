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
        <div onClick={handleClick} className={'dinoCard'}>
            {/* <div>
            <Link to={`/dinos/${name}`}>{name}</Link>
            </div> */}

            <div>{name}</div>

            <img className='DinoImage' src={image} alt={name}></img>
        </div>
    )
}

export default DinoCard;