import React from 'react';
import logo from "../assets/foooter.png"
import { BsInstagram, BsBrowserChrome, BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="md:px-28 px-3 mb-10 bg-[#263238] text-white md:py-14 py-6">
            <div className="flex gap-10 justify-between flex-col md:flex-row">
                <div className='md:w-[400px] w-full'>
                    <img className='w-[150px] h-[25px] block mx-auto' src={logo} alt="" />
                    <h1 className="md:my-14 my-6 text-center">All rights reserved</h1>
                    <div className="flex gap-5 text-xl w-[150px] mx-auto">
                        <BsInstagram />
                        <BsBrowserChrome />
                        <BsTwitter />
                        <BsYoutube />
                    </div>
                </div>
                <div className="md:w-[600px] w-full">
                    <div className='grid md:grid-cols-3 gap-5'>
                        <div className="text-center">
                            <h1>Company</h1>
                        </div>
                        <div>
                            <h1>Support</h1>
                        </div>
                        <div>
                            <h1>Stay up to date</h1>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Footer;