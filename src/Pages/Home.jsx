import React from 'react';
import Banner from '../Component/HomeComponents/Banner';
import WelcomeSection from '../Component/HomeComponents/WelcomeSetion';
import Ingredients from '../Component/HomeComponents/Ingredients';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WelcomeSection/>
            <Ingredients/>
        </div>
    );
};

export default Home;