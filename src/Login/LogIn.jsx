import React from 'react';
import { Link } from 'react-router-dom';


const LogIn = () => {
    return (
        <div className=" bg-white px-3 md:mt-36 my-10">
            <div className="max-w-[700px] mx-auto border p-10 rounded-md shadow-md">
                <label className="text-lg font-semibold" htmlFor="">Enter email</label> <br />
                <input className="border mb-4 p-3 w-full rounded-md" type="email" name="email" id="" placeholder='Enter your email' /><br />
                <label className="text-lg font-semibold" htmlFor="">Eneter password</label> <br />
                <input className="border p-3 w-full rounded-md" type="password" name="password" id="" placeholder='Enter your password' /> <br />
                <p className='my-5 text-blue-600 underline cursor-pointer'>Forget Password?</p>
                <input className='bg-[#4CAF4F] cursor-pointer text-white p-3 w-full font-bold duration-500 border border-[#4CAF4F] hover:bg-transparent hover:text-[#4CAF4F] rounded-md' type="button" value="Login" />
                <p className="text-center my-5">Don't have an account? <Link to="/sinup"><span className="font-semibold text-blue-600">Sing up</span></Link></p>

            </div>
        </div>
    );
};

export default LogIn;