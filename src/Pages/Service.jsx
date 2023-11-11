import React from 'react';
import iamge1 from "../assets/service/service1.jpg"

const Service = () => {
    return (
        <div className='mt-10 px-3 max-w-[1440px] mx-auto'>
            <div className="grid md:grid-cols-4 gap-4">
                <div className='rounded-md text-transparent hover:text-white hover:bg-black hover:shadow-md duration-300 cursor-pointer'>
                    <img className='rounded-md relative' src={iamge1} alt="" />

                    <h1 className='font-bold text-2xl  absolute md:top-[250px] md:left-[320px] bg-black bg-transparent'>Digital Marketing</h1>

                </div>
            </div>
        </div>
    );
};

export default Service;