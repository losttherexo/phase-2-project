import React from 'react'
import andredinopic from '../images/andredinopic.jpg'
import mark from '../images/mark.jpg'
import robert from '../images/robert.jpg'

function About () {

    return (
        <div className='bg-gradient-to-b from-stone-400 to-zinc-700'>
            <div className='text-center font-bold text-4xl p-4'><h1> Your favorite Paleontologists! </h1></div>
            <div className='aboutContainer'>
                <div className='aboutCard p-6'>
                    <h2 className='font-bold text-xl m-2'>André</h2>
                    <img className='aboutImage' src={andredinopic} alt='Andre' />
                    <p className='m-2'>Favorite Dinosaur: Ankylosaurus </p>
                    <p> Favorite Dinosaur Movie: Jurassic Park</p>
                </div>
                <div className='aboutCard p-6'>
                    <h2 className='font-bold text-xl m-2'>Mark</h2>
                    <img className='aboutImage' src={mark} alt='Mark' />
                    <p className='m-2'>Favorite Dinosaur: Archaeopteryx</p>
                    <p> Favorite Dinosaur Movie: The Land Of The Lost</p>
                </div>
                <div className='aboutCard p-6'>
                    <h2 className='font-bold text-xl m-2'>Robert</h2>
                    <img className='aboutImage' src={robert} alt='Robert'/>
                    <p className='m-2'>Favorite Dinosaur: The "Octrich-Dino" Deinocheirus </p>   
                    <p> Favorite Dinosaur Movie: The Land Before Time</p>
                </div>
            </div>
        </div>
    )
}

export default About;