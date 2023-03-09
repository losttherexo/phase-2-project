import React from 'react'
import andredinopic from '../images/andredinopic.jpg'
import mark from '../images/mark.jpg'

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
                    <img className='aboutImage' src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/271990853_10216879986826572_7605611517030036169_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Kylu9CUKXwAX8At6co&_nc_ht=scontent-lga3-2.xx&oh=00_AfB6DduihupmkdvLFhu2CRkHfD-ixQs7V3el-2varabEgQ&oe=640D8B14" alt='Robert'/>
                    <p className='m-2'>Favorite Dinosaur: The "Octrich-Dino" Deinocheirus </p>   
                    <p> Favorite Dinosaur Movie: The Land Before Time</p>
                </div>
            </div>
        </div>
    )
}

export default About;