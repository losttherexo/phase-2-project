import React from 'react'
import { GiDinosaurBones } from 'react-icons/gi';

function Home () {
    return (
    <div className='home'>
        <div>
            <h1>Dino <GiDinosaurBones /> More</h1>
            <h2>Dinosaur Database of Movies and Information of Multiple Species </h2>
        </div>
        <div>
            <img className="homeDinoPic" src="https://media.tenor.com/u-13COHIf8cAAAAd/dinosaur-park-jurassic-world-camp-cretaceous.gif"/>
        </div>
        
        {/* <img className="homeDinoPic" src="https://wallpaper.dog/large/11037831.jpg"/> */}
    </div >
    )
}

export default Home;