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

                <div className="flex gap-6 items-center font-semibold">
                    <button className="border rounded-md p-2 border-[#4CAF4F]">Login</button>
                    <button className="bg-[#4CAF4F] p-2 rounded-md text-white ">Sing Up</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;