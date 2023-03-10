import React from 'react'
import DinoCard from './DinoCard'

function DinoContainer ({array, displayDino}) {
    let route = array.map(dino => {
        return (
            //<Route key={dino.id} path={`/dinos/${dino.name}`} element={<DinoCard key={dino.name} data={dino} />}/>
            <DinoCard onClick={() =>console.log('HELLOWORLD')} key={dino.name} data={dino} displayDino={displayDino}/>
        )
    })
    return (
        <>
            <div className='dinoCardContainer bg-gradient-to-b from-stone-400 to-zinc-700'>
                {route}
            </div>
       
        </>
    )
 //hello world
 //<Route path={`/dinos/${dinoObj.name}`} element={<DinoCard data={dinoObj} />} />
}

export default DinoContainer;