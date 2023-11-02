import React from 'react';


const LogIn = () => {
    return (
        <div className="md:px-28 bg-white px-3">
            <h1>Loging Form</h1>
            <div className="max-w-[700px] mx-auto border p-10">
                <label htmlFor="">Enter email</label> <br />
                <input type="email" name="email" id="" placeholder='enter your email' /><br />
                <label htmlFor="">Enetr password</label> <br />
                <input type="password" name="password" id="" placeholder='enter your password' /> <br />
                <p>Forget Password?</p>
                <input className='bg-[#4CAF4F] text-white px-5 py-2 w-full font-bold duration-500 border-[#4CAF4F] hover:bg-transparent hover:text-[#4CAF4F] rounded-md' type="button" value="Login" />
                <p>Don't have an account? <span>Sing up</span></p>

            </div>
        </div>
    );
};

export default LogIn;