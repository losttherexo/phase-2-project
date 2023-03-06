import React from 'react'
import DinoCard from './DinoCard'
import { useState, useEffect } from 'react';
import { Route, useMatch, useParams } from 'react-router-dom';

function DinoContainer ({array}) {

    // let match = useMatch();
    // console.log(match.url);
    let link = array.map(dino => {
        return <DinoCard key={dino.name} data={dino} dinos={array}/>
    })
    return (
        <div className='dinoCardContainer'>
            {link}
        </div>
    )
 //hello world
}

export default DinoContainer;