import React from 'react'
import DinoContainer from './DinoContainer'
import NavBar from './NavBar';
import { useState, useEffect, useParams } from 'react';

function Dinos () {
    // let params = useParams();
    // console.log(params);
    const [dinoArray, setDinoArray] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedArr, setSearchedArr] = useState([]);

    let port = 'http://localhost:3001/dinos';

    useEffect(() => {
        fetch(port)
            .then(res => res.json())
            .then(returnedArray => setDinoArray(returnedArray))
    },[])

    return (
        <>
            <NavBar />
            Dino Page!
            <DinoContainer array={dinoArray}/>
        </>
    )

}

export default Dinos;