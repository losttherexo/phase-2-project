import React from 'react'
import DinoContainer from './DinoContainer'
import { useState, useEffect } from 'react';
//import {Route, Routes} from 'react-router-dom'

function Dinos () {
    // let params = useParams();
    // console.log(params);
    const [dinoArray, setDinoArray] = useState([]);
    const [dinoDisp, setDinoDisp] = useState({});
    const [hideSpec, setHideSpec] = useState(true);
    const [hideAddForm, sethideAddForm] = useState(true);

    let port = 'http://localhost:3001/dinos';

    const displayDinos = (dino) => {
        setDinoDisp(dino);
        setHideSpec(false);
    }

    useEffect(() => {
        fetch(port)
            .then(res => res.json())
            .then(returnedArray => setDinoArray(returnedArray))
    },[port]) //hidden={hideSpec}

    const [dForm, setDForm]= useState ({
        name: "",
        image: "",
        diet: "" ,
        habitat: "",
        location: "",
        'time-period': "",
        height: "",
        weight: "",
        funFact: "",

    })
    function handleChange(e) {
        setDForm({
            ...dForm,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
     e.preventDefault();
     const newDino = {
        name: dForm.name,
        image: dForm.image,
        diet: dForm.diet,
        habitat: dForm.habitat,
        location: dForm.location,
        "time-period": dForm['time-period'],
        height: dForm.height,
        weight: dForm.weight,
        funFact: dForm.funFact,
     }
     fetch(port, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newDino)
     })
     .then(res => res.json())
     .then(handleAddDino)
    }
    function handleAddDino(newDino){
        setDinoArray([...dinoArray, newDino]);

    }

    return (
        <>
            <DinoContainer array={dinoArray} displayDino={displayDinos}/>
            <div onClick={() =>setHideSpec(true)} hidden={hideSpec} className='dinoSpecs'>
                <h1>{dinoDisp.name}</h1>
                <img className='bigPic shadow' src={dinoDisp.image} alt={dinoDisp.name}></img>
                <p>{'Diet: '+ dinoDisp.diet}</p>
                <p>{'Habitat: '+ dinoDisp.habitat}</p>
                <p>{'Location: '+ dinoDisp.location}</p>
                <p>{'Time Alive: '+ dinoDisp['time-period']}</p>
                <p>{'Weight: '+ dinoDisp.weight}</p>
                <p>{'Size: '+ (dinoDisp.height || dinoDisp.length)}</p>
                <p>{'Fun Fact: '+ dinoDisp.funFact}</p>


            </div>
            <button onClick={() => sethideAddForm(!hideAddForm)} className='shadow' id='addDBtn'>Add Dinosaurs</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form className= "form-box1" hidden={hideAddForm} id="dinoForm" onSubmit={handleSubmit}>
                <h2>Add a New Dinosaur</h2>
                <input onChange={handleChange} value={dForm.name}name="name"type="text" placeholder="Dinosaur Name" />
                <input onChange={handleChange} value={dForm.image}name="image"type="text" placeholder="Dinosaur Image" />
                <input onChange={handleChange} value={dForm.diet}name="diet"type="text" placeholder="Dinosaur Diet" />
                <input onChange={handleChange} value={dForm.habitat}name="habitat"type="text" placeholder="Dinosaur Habitat" />
                <input onChange={handleChange} value={dForm.location}name="location"t ype="text" placeholder="Dinosaur Location" />
                <input onChange={handleChange} value={dForm["time-period"]}name="time-period"type="text" placeholder="Dinosaur Time Period" />
                <input onChange={handleChange} value={dForm.weight}name="weight"type="text" placeholder="Dinosaur Weight" />
                <input onChange={handleChange} value={dForm.height}name="height"type="text" placeholder="Dinosaur Height" />
                <input onChange={handleChange} value={dForm.funFact} name="funFact" type="text" placeholder="Dinosaur Fun Fact" />
                <button className="submitB1" type="submit">Submit Dinosaur</button>
            </form>
            <br></br>
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