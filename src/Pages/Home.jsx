import React from 'react';
import Banner from '../NavBar/Banner';
import OurClients from './OurClients';
import ManageComunity from './ManageComunity';
import Unseen from './Unseen';
import Business from './Business';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurClients />
            <ManageComunity />
            <Unseen />
            <Business />
        </div>
    );
};

export default Home;