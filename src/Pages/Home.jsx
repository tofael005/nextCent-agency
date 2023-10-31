import React from 'react';
import Banner from '../NavBar/Banner';
import OurClients from './OurClients';
import ManageComunity from './ManageComunity';
import Unseen from './Unseen';
import Business from './Business';
import Design from './Design';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurClients />
            <ManageComunity />
            <Unseen />
            <Business />
            <Design />
        </div>
    );
};

export default Home;