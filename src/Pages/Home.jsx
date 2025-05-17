import React from 'react';
import Banner from '../Component/HomeComponents/Banner';
import WelcomeSection from '../Component/HomeComponents/WelcomeSetion';
import Ingredients from '../Component/HomeComponents/Ingredients';
import ChefRecommendation from '../Component/HomeComponents/ChefRecomendation';
import FoodQuality from '../Component/HomeComponents/FoodQuality';
import Review from '../Component/HomeComponents/Review';
import Chef from '../Component/HomeComponents/Chef';
import Services from '../Component/HomeComponents/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WelcomeSection/>
            <Ingredients/>
            <ChefRecommendation/>
            <FoodQuality/>
            <Review/>
            <Services/>
            <Chef/>
        </div>
    );
};

export default Home;