import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Home />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;