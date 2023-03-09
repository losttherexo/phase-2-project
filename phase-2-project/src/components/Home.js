import React from 'react'
import { GiDinosaurBones } from 'react-icons/gi';

function Home () {
    return (
    <div className='flex flex-col m-auto p-3 bg-gradient-to-b from-stone-400 to-zinc-700 text-center'>
        <h1 className='flex flex-row justify-center text-6xl font-bold tracking-wide p-4'>Dino <GiDinosaurBones /> More</h1>
        <h2 className='p-3 mx-2 text-lg'>Dinosaur Database of Movies and Information of Multiple Species </h2>
        <img className='self-center mx-2 p-3' src="https://media.tenor.com/u-13COHIf8cAAAAd/dinosaur-park-jurassic-world-camp-cretaceous.gif" alt='dinosaurs roaming' />
        {/* <img className="homeDinoPic" src="https://wallpaper.dog/large/11037831.jpg"/> */}
    </div >
    )
}

export default Home;