import React from 'react';
import iamge1 from "../assets/service/service1.jpg"

const Service = () => {
    return (
        <div className='mt-10 px-3'>
            <div className="grid md:grid-cols-4 gap-4">
                <div className='border'>
                    <img className='rounded-md hover:shadow-md duration-300 hover:shadow-black/50 scale-100 hover:scale-95' src={iamge1} alt="" />
                    <div className="flex items-center justify-between my-2 gap-2 ">
                        <h1 className='font-semibold'>Digital Marketing</h1>
                        <p className='text-gray-500'>1.5 month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;