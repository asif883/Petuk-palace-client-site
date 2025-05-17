import React from 'react';
import img from '../../assets/home1-main-chef-5.jpg'

const Chef = () => {
    return (
        <div className='bg-[#EBEBEB] pt-8'>
            <div className='flex flex-col md:flex-row gap-4 items-center justify-between max-w-7xl mx-auto px-3'>
                <div className='flex-1'>
                <p className='text-gray-700 font-semibold font-barlow text-lg uppercase'>Tasty and Crunchy</p>
                <h1 className='text-4xl text-gray-900 font-semibold mb-4 font-barlow uppercase'>Our Chef</h1>
                <p className='text-gray-600 mb-8'>At Petuk Palace, our chefs are the heart of the kitchen — skilled artisans who transform fresh ingredients into extraordinary culinary experiences. Trained in both traditional Bengali cuisine and global techniques, they bring passion, precision, and creativity to every plate. Each dish is thoughtfully prepared with an eye for detail and a love for authentic flavor. Whether it’s a nostalgic deshi classic or a modern fusion twist, our chefs ensure that every bite tells a story.</p>
                <button className='uppercase px-4 py-3 bg-white hover:bg-gray-900 hover:text-white cursor-pointer transition-colors duration-300'>view our menu</button>
                </div>
                <div className='flex-1'>
                    <img src={img} alt="chef" />
                </div>
            </div>
        </div>
    );
};

export default Chef;
