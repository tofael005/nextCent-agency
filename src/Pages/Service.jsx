import React from 'react';
import iamge1 from "../assets/service/service1.jpg"
import iamge2 from "../assets/service/service2.jpg"
import iamge3 from "../assets/service/service3.jpg"
import iamge4 from "../assets/service/service4.jpg"

const Service = () => {
    return (
        <div className='mt-10 px-3 max-w-[1440px] mx-auto mb-10'>
            <div className="grid md:grid-cols-4 gap-6">

                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge1} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Digital Marketing</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge2} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Digital Marketing</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge3} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Digital Marketing</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge4} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Digital Marketing</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge1} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Digital Marketing</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;