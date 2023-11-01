import React from 'react';
import imga from "../assets/images/image1.png"
import imga2 from "../assets/images/image2.png"
import imga3 from "../assets/images/image3.png"


import { FiArrowRightCircle } from 'react-icons/fi';

const Marketing = () => {
    return (
        <div className="md:px-28 mb-28 px-3">
            <div>
                <h1 className="text-center text-4xl font-semibold">Caring is the new marketing</h1>
                <p className="md:text-center my-8 text-justify">The Nexcent blog is the best place to read about the latest membership insights, <br /> trends and more. See who's joining the community, read about how our community <br /> are increasing their membership income and lot's more.​</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6 mb-11">
                <div className='relative mb-28'>
                    <img className='w-full' src={imga} alt="" />
                    <div className="bg-slate-100 w-[300px] md:ml-12 ml-8 absolute -mt-20 p-4 mb-28 rounded-md shadow-lg">
                        <h1 className='text-lg text-center font-semibold mb-4'>Creating Streamlined <br /> Safeguarding Processes with <br /> OneRen</h1>
                        <div className='flex gap-2 items-center justify-center text-[#4CAF4F] text-xl font-semibold md:ml-0 hover:bg-[#4CAF4F] hover:text-white duration-500 px-5 py-2 rounded-md'>
                            <input type="button" value="Read more" />
                            <FiArrowRightCircle />
                        </div>
                    </div>
                </div>
                <div className='relative mb-28'>
                    <img className='w-full' src={imga2} alt="" />
                    <div className="bg-slate-100 w-[300px] md:ml-12 ml-8 absolute -mt-20 p-4 rounded-md shadow-lg">
                        <h1 className='text-lg text-center font-semibold mb-4'>What are your safeguarding <br /> responsibilities and how can <br /> you manage them?</h1>
                        <div className='flex gap-2 items-center justify-center text-[#4CAF4F] text-xl font-semibold md:ml-0 hover:bg-[#4CAF4F] hover:text-white duration-500 px-5 py-2 rounded-md'>
                            <input type="button" value="Read more" />
                            <FiArrowRightCircle />
                        </div>
                    </div>
                </div>
                <div className='relative mb-28'>
                    <img className='w-full' src={imga3} alt="" />
                    <div className="bg-slate-100 w-[300px] md:ml-12 ml-8 absolute -mt-20 p-4 rounded-md shadow-lg">
                        <h1 className='text-lg text-center font-semibold mb-4'>Revamping the Membership <br /> Model with Triathlon <br /> Australia</h1>
                        <div className='flex gap-2 items-center justify-center text-[#4CAF4F] text-xl font-semibold md:ml-0  hover:bg-[#4CAF4F] hover:text-white duration-500 px-5 py-2 rounded-md'>
                            <input type="button" value="Read more" />
                            <FiArrowRightCircle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketing;