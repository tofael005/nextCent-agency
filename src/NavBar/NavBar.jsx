import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from "../assets/logo.png"


const NavBar = () => {
    const [toggle, setToggle] = useState()
    return (
        <div className='bg-[#F5F7FA] md:px-28 py-8 px-3'>
            <div className="flex justify-between items-center">
                <div>
                    <Link to="/"><img className="w-36" src={logo} alt="" /></Link>
                </div>


                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span>


                <div className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white md:text-gray-900 bg-opacity-90 top-20 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-6 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <ul className="flex flex-col md:flex-row gap-6 font-semibold">
                        <li>
                            <NavLink className="hover:bg-[#4CAF4F] duration-500 p-2 rounded-md hover:text-white" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:bg-[#4CAF4F] duration-500 p-2 rounded-md hover:text-white" to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:bg-[#4CAF4F] duration-500 p-2 rounded-md hover:text-white" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:bg-[#4CAF4F] duration-500 p-2 rounded-md hover:text-white" to="/product">Product</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:bg-[#4CAF4F] duration-500 p-2 rounded-md hover:text-white" to="/testimonials">Testimonial</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:bg-[#4CAF4F] duration-500 p-2 rounded-md hover:text-white" to="/faq">FAQ</NavLink>
                        </li>
                    </ul>

                    {/* LOGING AND SING UP BTN  */}

                    <div className="flex gap-2 items-center font-semibold md:ml-8">
                        <button className='text-[#4CAF4F] px-5 py-2 font-bold rounded-md'>Login</button>
                        <button className='bg-[#4CAF4F] text-white px-5 py-2 font-bold duration-500 border-[#4CAF4F] hover:bg-transparent hover:text-[#4CAF4F] rounded-md'>Sing Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;