import React from 'react';
import icon from "../assets/icon/Icon.png"
import icon1 from "../assets/icon/Icon1.png"
import icon2 from "../assets/icon/Icon2.png"

const ManageComunity = () => {
    return (
        <div className="md:px-28 px-3 mt-20 mb-20 text-center">
            <h1 className="md:text-4xl text-2xl font-semibold">Manage your entire community <br /> in a single system</h1>
            <p className="my-6">Who is Nextcent suitable for?</p>


            <div className="grid md:grid-cols-3 gap-8 mt-14 justify-center items-center">
                <div>
                    <img className='block mx-auto w-[50px] h-[50px]' src={icon} alt="" />
                    <div className='p-3'>
                        <h1 className='md:text-2xl font-semibold mb-3'>Membership <br /> Organisations</h1>
                        <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
                    </div>
                </div>
                <div className='p-3'>
                    <img className='block mx-auto w-[50px] h-[50px]' src={icon1} alt="" />
                    <div>
                        <h1 className='md:text-2xl font-semibold mb-3'>Membership <br /> Organisations</h1>
                        <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
                    </div>
                </div>
                <div className='p-3'>
                    <img className='block mx-auto w-[50px] h-[50px]' src={icon2} alt="" />
                    <div>
                        <h1 className='md:text-2xl font-semibold mb-3'>Membership <br /> Organisations</h1>
                        <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageComunity;