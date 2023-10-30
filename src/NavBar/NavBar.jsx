import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-[#F5F7FA]'>
            <div className="flex justify-between items-center">
                <div>
                    <Link><h1>LOGO</h1></Link>
                </div>

                <ul className="flex justify-between items-center gap-6">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Product</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;