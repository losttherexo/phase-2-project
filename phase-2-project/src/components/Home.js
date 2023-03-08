import React from 'react'
import { GiDinosaurBones } from 'react-icons/gi';

function Home () {
    return (
    <div className='flex flex-col m-auto p-3 bg-gradient-to-b from-stone-400 to-zinc-700 text-center'>
        <h1 className='flex flex-row justify-center text-4xl font-bold tracking-wide'>Dino <GiDinosaurBones /> More</h1>
        <h2 className='p-3'>Dinosaur Database of Movies and Information of Multiple Species </h2>
        <img className='self-center w-3/4 p-3' src="https://media.tenor.com/u-13COHIf8cAAAAd/dinosaur-park-jurassic-world-camp-cretaceous.gif" alt='dinosaurs roaming' />
        {/* <img className="homeDinoPic" src="https://wallpaper.dog/large/11037831.jpg"/> */}
    </div >
    )
}

export default Home;