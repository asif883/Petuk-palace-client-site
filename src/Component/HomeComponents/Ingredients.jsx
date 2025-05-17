import React from 'react';
import img from '../../assets/home1-main-image-4.jpg'
import '../../CSS/font.css'

const Ingredients = () => {
    return (
        <div className='bg-[#EBEBEB] mt-16 py-10'>
            <div className='flex flex-col md:flex-row gap-4 items-center max-w-7xl mx-auto px-3'>
                <div className='flex-1'>
                <p className='text-gray-700 font-semibold font-barlow text-xl'>Ingredients We Trust</p>
                <h1 className='text-4xl text-gray-900 font-semibold mb-6 font-barlow'>From Fresh Fields to Flavorful Feasts</h1>
                <p className='text-gray-600 mb-8'>At Petuk Palace, every dish begins with the finest, freshest ingredients.
                We believe great taste comes from quality sources — from hand-picked spices to locally sourced produce. Discover what goes into our signature recipes and why every bite feels like home</p>
                <button className='uppercase px-4 py-3 bg-white hover:bg-gray-900 hover:text-white cursor-pointer transition-colors duration-300'>view our menu</button>
                </div>
                <div className='flex-1'>
                    <img src={img} alt="Ingredients" />
                </div>
            </div>
        </div>
    );
};

export default Ingredients;