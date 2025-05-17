import React from 'react';
import SharedBanner from '../../SharedSection/SharedBanner';
import banner from '../../assets/Restaurant-blog-banner.png'


const BlogBanner = () => {
    return (
        <div>
            <SharedBanner
             banner={banner}
             heading='From Our Kitchen to Your Screen'
             subHeading='Discover food stories, cooking tips, and behind-the-scenes flavors from the heart of Petuk Palace.'
            ></SharedBanner>
        </div>
    );
};

export default BlogBanner;