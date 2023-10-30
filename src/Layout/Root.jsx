import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Home />

            <Outlet />
        </div>
    );
};

export default Root;