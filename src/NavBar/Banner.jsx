import React from 'react';
import banner from "../assets/images/banner.png"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-[#F5F7FA] mb-24 mt-10">
            <div className="flex md:px-28 md:py-14 justify-between flex-col md:flex-row px-6 py-14">
                <div className='mb-12'>
                    <h1 className="md:text-7xl font-bold mb-5 text-3xl md:text-left text-center md:leading-tight">Lessons and insights <br /> <span className='text-[#4CAF4F]'>from 8 years</span></h1>
                    <p className="text-center mb-7 mt-3 md:text-left">Where to grow your business as a photographer: site or social media?</p>
                    <div className='ml-24 md:ml-0'>
                        <Link to="/sinup">
                            <input className='bg-[#4CAF4F] text-white font-semibold w-[130px] h-[50px] left-28 mx-auto hover:border border-[#4CAF4F] hover:bg-transparent cursor-pointer hover:text-[#4CAF4F] duration-500 rounded-md' type="button" value="Register" />
                        </Link>
                    </div>
                </div>
                <img className="md:w-[390px] md:h-[390px]  p-4" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;