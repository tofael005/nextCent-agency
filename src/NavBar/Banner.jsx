import React from 'react';
import banner from "../assets/images/banner.png"

const Banner = () => {
    return (
        <div className="bg-[#F5F7FA] mb-24 mt-10">
            <div className="flex md:px-28 md:py-14 justify-between flex-col md:flex-row px-6 py-14">
                <div className='mb-10'>
                    <h1 className="md:text-7xl font-bold mb-5 text-3xl md:text-left text-center">Lessons and insights <br /> <span className='text-[#4CAF4F]'>from 8 years</span></h1>
                    <p className="text-center mb-6 md:text-left">Where to grow your business as a photographer: site or social media?</p>
                    <div className='ml-24 md:ml-0'>
                        <input className='bg-[#4CAF4F] w-[130px] h-[50px] left-28 mx-auto rounded-md' type="button" value="Register" />
                    </div>
                </div>
                <img className="md:w-[390px] md:h-[390px] object-cover p-2" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;