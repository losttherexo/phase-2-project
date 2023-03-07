import React from 'react'
import DinoContainer from './DinoContainer'
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
//import {Route, Routes} from 'react-router-dom'

function Dinos () {
    // let params = useParams();
    // console.log(params);
    const [dinoArray, setDinoArray] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedArr, setSearchedArr] = useState([]);
    const [dinoDisp, setDinoDisp] = useState({});
    const [hideSpec, setHideSpec] = useState(true);

    let port = 'http://localhost:3001/dinos';

    const displayDinos = (dino) => {
        setDinoDisp(dino);
        setHideSpec(false);


    }

    useEffect(() => {
        fetch(port)
            .then(res => res.json())
            .then(returnedArray => setDinoArray(returnedArray))
    },[]) //hidden={hideSpec}

    return (
        <>
            Dino Page!
            <DinoContainer array={dinoArray} displayDino={displayDinos}/>
            <div onClick={() =>setHideSpec(true)} className='dinoSpecs'>
                <h1>{dinoDisp.name}</h1>
                <img className='bigPic' src={dinoDisp.image} alt={dinoDisp.name}></img>
                <p>{'Diet: '+ dinoDisp.diet}</p>
                <p>{'Habitat: '+ dinoDisp.habitat}</p>
                <p>{'Location: '+ dinoDisp.location}</p>
                <p>{'Time Alive: '+ dinoDisp['time-period']}</p>
                <p>{'Weight: '+ dinoDisp.weight}</p>
                <p>{'Size: '+ (dinoDisp.height || dinoDisp.length)}</p>
                <p>{'Fun Fact: '+ dinoDisp.funFact}</p>


            </div>
        </>
    )
        /**
         *       "id": 14,
      "name": "Micropachycephalosaurus",
      "image": "http://www.prehistoric-wildlife.com/images/species/m/micropachycephalosaurus-size.jpg",
      "diet": "Herbivore",
      "habitat": "land",
      "location": "what is now Shandong, China",
      "time-period": "late-Cretaceous",
      "weight": "1 kilo",
      "length": "1 m",
      "funFact": "tiny boi with longest name"
         */
}

export default Dinos;