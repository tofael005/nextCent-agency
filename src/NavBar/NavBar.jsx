import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from "../assets/logo.png"


const NavBar = () => {
    const [toggle, setToggle] = useState()
    return (
        <div className='bg-[#F5F7FA] p-5'>
            <div className="flex justify-between items-center">
                <div>
                    <Link to="/"><img className="w-36" src={logo} alt="" /></Link>
                </div>


                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span>


                <div className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white md:text-gray-900 bg-opacity-90 top-14 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-6 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <ul className="flex gap-6 flex-col md:flex-row">
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

                    {/* LOGING AND SING UP BTN  */}
                    
                    <div className="flex gap-6 items-center font-semibold">
                        <button className="border rounded-md p-2 border-[#4CAF4F]">Login</button>
                        <button className="bg-[#4CAF4F] p-2 rounded-md text-white ">Sing Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;