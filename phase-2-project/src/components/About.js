import React from 'react'
import andredinopic from '../images/andredinopic.jpg'

function About () {

    return (
        <div className='aboutPage'>
            <div className='aboutContainer'><h1> This is our About </h1></div>
            <div className='aboutContainer'>
                <div className='aboutCard'>
                    <h2>André</h2>
                    <img className='aboutImage' src={andredinopic} alt='Andre' />
                    <p>Favorite Dinosaur: Ankylosaurus </p>
                    <p> Favorite Dinosaur Movie: Jurassic Park</p>
                </div>
                <div className='aboutCard'>
                    <h2>Mark</h2>
                    <img className='aboutImage' src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt='Mark' />
                    <p>Favorite Dinosaur: A bit about us</p>
                    <p> Favorite Dinosaur Movie: The Land Before Time</p>
                </div>
                <div className='aboutCard'>
                    <h2>Robert</h2>
                    <img className='aboutImage' src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/271990853_10216879986826572_7605611517030036169_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Kylu9CUKXwAX8At6co&_nc_ht=scontent-lga3-2.xx&oh=00_AfB6DduihupmkdvLFhu2CRkHfD-ixQs7V3el-2varabEgQ&oe=640D8B14" alt='Robert'/>
                    <p>Favorite Dinosaur: The "Octrich-Dino" Deinocheirus </p>   
                    <p> Favorite Dinosaur Movie: The Land Before Time</p>
                </div>
            </div>
        </div>
    )
}

export default About;