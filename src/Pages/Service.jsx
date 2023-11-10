import React from 'react';
import iamge1 from "../assets/service/service1.jpg"

const Service = () => {
    return (
        <div className='mt-10 px-3'>
            <div className="grid md:grid-cols-4 gap-4">
                <div>
                    <img className='rounded-md hover:shadow-md duration-300 hover:shadow-black/50 scale-100 hover:scale-95' src={iamge1} alt="" />
                    <div>
                        <h1>Digital Marketing</h1>
                        <p>ghfr</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;