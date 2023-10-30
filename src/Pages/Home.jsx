import React from 'react';
import Banner from '../NavBar/Banner';
import OurClients from './OurClients';
import ManageComunity from './ManageComunity';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurClients />
            <ManageComunity />
        </div>
    );
};

export default Home;