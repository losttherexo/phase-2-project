import React from 'react'
import NavBar from './NavBar';

function Home () {
    return (
        <>
            <NavBar />
            This is Home!
            <form id="dinoForm">
                <h2>Add a New Dinosaur</h2>
                <input type="text" placeholder="Dinosaur Name" />
                <input type="text" placeholder="Dinosaur Image" />
                <input type="text" placeholder="Dinosaur Diet" />
                <input type="text" placeholder="Dinosaur Habitat" />
                <input type="text" placeholder="Dinosaur Location" />
                <input type="text" placeholder="Dinosaur Time Period" />
                <input type="number" placeholder="Dinosaur Weight" />
                <input type="number" placeholder="Dinosaur Height" />
                <input type="text" placeholder="Dinosaur Fun Fact" />
                <button type="submit">Submit Dinosaur</button>
            </form>
            <br></br>
            <form id="dinoMovie">
                <h2>Add a New Movie</h2>
                <input type="text" placeholder="Movie Title" />
                <input type="text" placeholder="Movie Image" />
                <input type="text" placeholder="Movie Director" />
                <input type="text" placeholder="Movie Summary" />
                <button type="submit">Submit Movie</button>
            </form>
        </>
    )

}

export default Home;