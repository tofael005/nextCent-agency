import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div>
               <h1>LOGO</h1>
               <div>
                    <NavLink>Home</NavLink>
               </div>
            </div>
        </div>
    );
};

export default NavBar;