import React from 'react';
import logo from "../assets/foooter.png"
import { BsInstagram, BsBrowserChrome, BsTwitter, BsYoutube, BsTelegram } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="md:px-28 px-3 bg-[#263238] text-white md:py-14 py-6">
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
                        <div className="text-center md:text-left">
                            <h1 className='text-2xl font-semibold mb-2'>Company</h1>
                            <p className='mb-1'>About</p>
                            <p className='mb-1'>Blog</p>
                            <p className='mb-1'>Contact us</p>
                            <p className='mb-1'>Pricing</p>
                            <p className='mb-1'>Testimonials</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold mb-2'>Support</h1>
                            <p className='mb-1'>Help center</p>
                            <p className='mb-1'>Terms of service</p>
                            <p className='mb-1'>Legal</p>
                            <p className='mb-1'>Privacy policy</p>
                            <p className='mb-1'>Status</p>
                        </div>
                        <div className='text-center md:text-left'>
                            <h1 className='text-2xl font-semibold mb-2'>Stay up to date</h1>
                            <div className='flex cursor-pointer w-[200px] mx-auto'>
                                <input className='p-4 rounded-md relative' type="search" name="" id="" placeholder='Your email address' />
                                <BsTelegram className='text-black text-3xl absolute md:ml-44 ml-44 mt-3' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;