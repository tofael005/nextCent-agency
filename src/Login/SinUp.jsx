import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SinUp = () => {
    return (
        <div className='bg-white px-3 md:mt-36 my-10'>
            <div className="max-w-[700px] mx-auto border p-10 rounded-md shadow-md">
                <label className="text-lg font-semibold" htmlFor="">User name</label> <br />
                <input className="border mb-4 p-3 w-full rounded-md" type="text" name='name' placeholder='User name' />
                <label className="text-lg font-semibold" htmlFor="">Enter email</label> <br />
                <input className="border mb-4 p-3 w-full rounded-md" type="email" name="email" id="" placeholder='Enter your email' /><br />
                <label className="text-lg font-semibold" htmlFor="">Eneter password</label> <br />
                <input className="border mb-8 p-3 w-full rounded-md" type="password" name="password" id="" placeholder='Enter your password' /> <br />
                <input className='bg-[#4CAF4F] cursor-pointer text-white p-3 w-full font-bold duration-500 border border-[#4CAF4F] hover:bg-transparent hover:text-[#4CAF4F] rounded-md' type="button" value="Sign-Up" />
                <p className="text-center my-5">Already have an account? <Link to="/login"><span className="font-semibold text-blue-600">Login</span></Link></p>


                <div className='flex justify-center items-center text-center gap-5 text-4xl mt-5'>
                    <FcGoogle className='cursor-pointer'/>
                    <BsFacebook className='text-blue-600 cursor-pointer' />
                    <AiFillLinkedin className='text-blue-500 cursor-pointer' />
                </div>
            </div>


        </div>
    );
};

export default SinUp;