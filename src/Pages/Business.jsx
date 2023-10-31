import React from 'react';
import icon from "../assets/icon/Icon3.png"
import icon1 from "../assets/icon/Icon4.png"
import icon2 from "../assets/icon/Icon5.png"
import icon3 from "../assets/icon/Icon6.png"

const Business = () => {
    return (
        <div className="bg-[#F5F7FA] md:px-28 px-3 mt-20 mb-14">
            <div className="grid md:grid-cols-2 gap-6 items-center md:py-14">
                <div className="md:text-left text-center">
                    <h1 className="md:text-4xl text-3xl font-semibold leading-tight mb-3">Helping a local <br /> business reinvent itself</h1>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 ">
                    <div className="flex gap-6 items-center md:ml-0 ml-20">
                        <img className="w-[70px] h-[70px]" src={icon} alt="" />
                        <div>
                            <h1 className="md:text-4xl font-bold mb-2 text-2xl">2,245,341</h1>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center md:ml-0 ml-20">
                        <img className="w-[70px] h-[70px]" src={icon1} alt="" />
                        <div>
                            <h1 className="md:text-4xl font-bold mb-2 text-2xl">46,328</h1>
                            <p>Club's</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center md:ml-0 ml-20">
                        <img className="w-[70px] h-[70px]" src={icon2} alt="" />
                        <div>
                            <h1 className="md:text-4xl font-bold mb-2 text-2xl">828,867</h1>
                            <p>Event Booking</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center md:ml-0 ml-20">
                        <img className="w-[70px] h-[70px]"src={icon3} alt="" />
                        <div>
                            <h1 className="md:text-4xl font-bold mb-2 text-2xl">1,926,436</h1>
                            <p>Payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;