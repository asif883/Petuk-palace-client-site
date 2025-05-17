import React from 'react';
import SharedBanner from '../../SharedSection/SharedBanner';
import banner from '../../assets/about.jpg'

const AboutBanner = () => {
    return (
        <div>
            <SharedBanner
                banner={banner}
                heading='Our Story at Petuk Palace'
                subHeading='Petuk Palace blends tradition and taste, offering authentic Bengali flavors with warmth, freshness, and a royal touch.'
            ></SharedBanner>
        </div>
    );
};

export default AboutBanner;