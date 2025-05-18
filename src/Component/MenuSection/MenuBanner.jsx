import React from 'react';
import SharedBanner from '../../SharedSection/SharedBanner';
import banner from '../../assets/menu-banner.jpg'
const MenuBanner = () => {
    return (
        <div>
            <SharedBanner 
            banner={banner}
            heading='Explore Our Dishes'
            subHeading='From local favorites to chef’s specials, browse through our carefully curated menu. Each dish tells a story of flavor, tradition, and innovation—made to impress your appetite.'
            />
        </div>
    );
};

export default MenuBanner;