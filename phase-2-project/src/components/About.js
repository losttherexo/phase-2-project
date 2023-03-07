import React from 'react'
import NavBar from './NavBar';

function About () {

    return (
        <div className='aboutPage'>
            <div className='aboutContainer'><h1> This is our About </h1></div>
            <div className='aboutContainer'>
                <div className='aboutCard'>
                    <h2>André</h2>
                    <img className='aboutImage' src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"/>
                    <p>A bit about us </p>
                </div>
                <div className='aboutCard'>
                    <h2>Mark</h2>
                    <img className='aboutImage' src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"/>
                    <p>A bit about us</p>
                </div>
                <div className='aboutCard'>
                    <h2>Robert</h2>
                    <img className='aboutImage' src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"/>
                    <p>A bit about us</p>
                </div>
            </div>
        </div>
    )
}

export default About;