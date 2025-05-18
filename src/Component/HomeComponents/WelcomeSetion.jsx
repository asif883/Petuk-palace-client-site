import React from 'react';
import img from '../../assets/chef-cooking.jpg'
// import img2 from '../../assets/home1-main-image-2.jpg'

const WelcomeSection = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 items-center max-w-7xl mx-auto mt-16 px-4'>
            <div className=''>
                <h1 className="text-5xl font-semibold mb-1 font-barlow text-gray-900 uppercase">
                    OUR STORY
                </h1>
                <p className='max-w-3xl my-5 font-roboto text-lg text-gray-600'>
                    At Petuk Palace, we bring you a delicious fusion of flavors crafted with the freshest ingredients. 
                    Whether you're craving classic favorites or bold new dishes, our menu is designed to satisfy every palate. 
                    Experience a warm ambiance, delightful meals, and exceptional service.
                </p>
            </div>

         
            <div className='w-1/2'>
                <div className="relative overflow-hidden group flex-1">
                    <img 
                        className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105" 
                        src={img} 
                        alt="image" 
                    />
                    
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                {/* <div className='flex-1 relative overflow-hidden group'>
                    <img 
                     className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
                     src={img2} 
                     alt="Image-2" />
                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div> */}
            </div>

        </div>
    );
};

export default WelcomeSection;