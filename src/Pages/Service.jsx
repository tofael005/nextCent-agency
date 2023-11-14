import React from 'react';
import iamge1 from "../assets/service/service1.jpg"
import iamge2 from "../assets/service/service2.jpg"
import iamge3 from "../assets/service/service3.jpg"
import iamge4 from "../assets/service/service4.jpg"
import iamge5 from "../assets/service/service5.jpg"
import iamge6 from "../assets/service/service6.jpg"
import iamge7 from "../assets/service/service7.jpg"
import iamge8 from "../assets/service/service8.jpg"

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
                        <h1 className='font-bold text-xl'>Graphic Design</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge3} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Content Writting</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge4} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Web Development</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge5} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Data Entry Expert</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge6} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Video Editing</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge7} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Motion Graphic</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>
                <div className='rounded-md hover:shadow-md duration-300 text-transparent hover:text-black cursor-pointer p-2'>
                    <img className='rounded-md h-[200px] w-full' src={iamge8} alt="" />
                    <div className='flex justify-between items-center mt-3 '>
                        <h1 className='font-bold text-xl'>Blogging</h1>
                        <p className='hover:text-blue-600 font-semibold'>Details</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;