import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar () {
    return (
        <div className='flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 font-bold '>
            <ul className='flex items-center divide-x-2 divide-slate-900 text-xl'>
                <li className='p-4'><NavLink to='/' exact> Home </NavLink></li>
                <li className='p-4'><NavLink to='/dinos' exact> Dinosaur Page </NavLink></li>
                <li className='p-4'><NavLink to='/movies' exact> Movie Page </NavLink></li>
                <li className='p-4'><NavLink to='/about' exact> About Us </NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;