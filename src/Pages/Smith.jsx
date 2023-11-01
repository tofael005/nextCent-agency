import React from 'react';
import image from "../assets/images/image00.png"
import icon from "../assets/brand/Logo1.png"
import icon2 from "../assets/brand/Logo2.png"
import icon3 from "../assets/brand/Logo3.png"
import icon4 from "../assets/brand/Logo4.png"
import icon5 from "../assets/brand/Logo5.png"
import icon6 from "../assets/brand/Logo6.png"

import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Smith = () => {
    return (
        <div className='md:px-28 mb-14 mt-10 bg-[#F5F7FA] px-3 py-16'>
            <div className="grid md:grid-cols-2 items-center">
                <img className='justify-center' src={image} alt="" />
                <div className='px-3'>
                    <p className='text-justify'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h1 className="my-4 md:text-4xl text-3xl text-[#4CAF4F] font-semibold text-center md:text-left">Tim Smith</h1>
                    <p className="mb-5 text-center md:text-left">British Dragon Boat Racing Association</p>

                    <div className="grid md:grid-cols-2 items-center gap-6 justify-center">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-6 justify-center items-center md:ml-0 ml-8 my-5'>
                            <img className="md:w-[75px] md:h-[40px]" src={icon} alt="" />
                            <img className="md:w-[75px] md:h-[40px]" src={icon2} alt="" />
                            <img className="md:w-[75px] md:h-[40px]" src={icon3} alt="" />
                            <img className="md:w-[75px] md:h-[40px]" src={icon4} alt="" />
                            <img className="md:w-[75px] md:h-[40px]" src={icon5} alt="" />
                            <img className="md:w-[75px] md:h-[40px]" src={icon6} alt="" />
                        </div>

                        <div className='-md:ml-6 -ml-0'>
                            <Link to="/customer" className="flex items-center text-center gap-2 justify-center mx-auto text-[#4CAF4F] text-2xl font-semibold md:ml-0  hover:bg-[#4CAF4F] hover:text-white duration-500 px-5 py-2 rounded-md">
                                <h1 >Meet all customers</h1>
                                <FiArrowRightCircle />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Smith;