import React from 'react';
import Banner from '../NavBar/Banner';
import OurClients from './OurClients';
import ManageComunity from './ManageComunity';
import Unseen from './Unseen';
import Business from './Business';
import Design from './Design';
import Smith from './Smith';
import Marketing from './Marketing';
import Getdemo from './Getdemo';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurClients />
            <ManageComunity />
            <Unseen />
            <Business />
            <Design />
            <Smith />
            <Marketing />
            <Getdemo />
        </div>
    );
};

export default Home;