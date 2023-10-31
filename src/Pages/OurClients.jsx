import React from 'react';
import icon from "../assets/brand/Logo1.png"
import icon1 from "../assets/brand/Logo2.png"
import icon2 from "../assets/brand/Logo3.png"
import icon3 from "../assets/brand/Logo4.png"
import icon4 from "../assets/brand/Logo5.png"
import icon5 from "../assets/brand/Logo6.png"

const OurClients = () => {
    return (
        <div className='bg-white md:px-28 px-3 mb-20'>
            <div className="my-6 text-center">
                <h1 className="text-4xl font-semibold">Our Clients</h1>
                <p className="mb-10 mt-3">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center justify-center max-w-[1150px] mx-auto ml-8">
                <div>
                    <img className='' src={icon} alt="" />
                </div>
                <div>
                    <img src={icon1} alt="" />
                </div>
                <div>
                    <img src={icon2} alt="" />
                </div>
                <div>
                    <img src={icon3} alt="" />
                </div>
                <div>
                    <img src={icon4} alt="" />
                </div>
                <div>
                    <img src={icon5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurClients;