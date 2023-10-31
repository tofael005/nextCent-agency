import React from 'react';
import image from "../assets/pana.png"

const Design = () => {
    return (
        <div className="md:px-28 px-3 mb-10">
            <div className='grid md:grid-cols-2 gap-6 items-center px-3 py-6'>
                <img className='md:w-[440px] md:h-[330px]' src={image} alt="" />
                <div>
                    <h1 className="md:text-4xl text-2xl font-bold leading-tight mb-3">How to design your site footer like we did</h1>
                    <p className='text-justify mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <input className='bg-[#4CAF4F] text-white font-semibold w-[130px] h-[50px] md:ml-0 ml-24 hover:border border-[#4CAF4F] hover:bg-transparent cursor-pointer hover:text-[#4CAF4F] duration-500 rounded-md' type="button" value="Learn more" />
                </div>
            </div>
        </div>
    );
};

export default Design;