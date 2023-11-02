import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <NavBar />
            <div className="md:min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;