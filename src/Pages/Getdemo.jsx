import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';

const Getdemo = () => {
    return (
        <div className='md:px-28 mt-28 bg-[#F5F7FA] px-3 py-16'>
            <h1 className="text-center md:text-4xl text-2xl font-semibold  leading-tight space-x-3">Pellentesque suscipit <br /> fringilla libero eu.</h1>

            <Link to="/customer" className="flex items-center gap-2 justify-center bg-[#4CAF4F] text-white font-semibold w-[130px] h-[50px] mx-auto hover:border border-[#4CAF4F] hover:bg-transparent cursor-pointer hover:text-[#4CAF4F] duration-500 rounded-md mt-10">
                <h1 >Get a Demo</h1>
                <FiArrowRightCircle />
            </Link>
        </div>
    );
};

export default Getdemo;