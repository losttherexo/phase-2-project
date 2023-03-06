import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <div className='navBar'>
            <NavLink
            to='/'
            exact>
                Home
            </NavLink>
            <NavLink
            to='/dinos'
            exact>
                Dinosaur Page
            </NavLink>
            <NavLink
            to='/movies'
            exact>
                Movie Page
            </NavLink>
            <NavLink
            to='/about'
            exact>
                About Us
            </NavLink>
        </div>
    )
}

export default NavBar;