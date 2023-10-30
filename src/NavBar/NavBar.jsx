import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"


const NavBar = () => {
    return (
        <div className='bg-[#F5F7FA] p-5'>
            <div className="flex justify-between items-center">
                <div>
                    <Link to="/"><img className="w-36" src={logo} alt="" /></Link> 
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
                    <li>
                        <NavLink to="/testimonials">Testimonial</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq">FAQ</NavLink>
                    </li>
                </ul>

                <div className="flex gap-6 items-center">
                    <button>Login</button>
                    <button>Sing Up</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;