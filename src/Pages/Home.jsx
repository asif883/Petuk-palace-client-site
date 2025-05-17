import React from 'react';
import Banner from '../Component/HomeComponents/Banner';
import WelcomeSection from '../Component/HomeComponents/WelcomeSetion';
import Ingredients from '../Component/HomeComponents/Ingredients';
import ChefRecommendation from '../Component/HomeComponents/ChefRecomendation';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WelcomeSection/>
            <Ingredients/>
            <ChefRecommendation/>
        </div>
    );
};

export default Home;