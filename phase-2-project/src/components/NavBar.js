import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar(){

    return (
        <div>
   <NavLink to = "/">
      <h2>Home</h2>
    </NavLink>
    <NavLink to = "/Dinos">
      <h2>Dinosaurs</h2>
    </NavLink>
    <NavLink to = "/Movies">
      <h2>Movies</h2>
    </NavLink>
    <NavLink to = "/About">
      <h2>About</h2>
    </NavLink>
        </div>
    )

}

export default NavBar