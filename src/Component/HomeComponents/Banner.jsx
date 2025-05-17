import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../../Css/swiper.css'
import '../../Css/font.css'

import banner1 from '../../assets/banner-1.webp';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpeg';
import { Link } from "react-router-dom";
import NavEnd from "../Header/NavEnd";

const bannerData = [
  {
    title: "Welcome to Petuk Palace",
    description: "Where every bite tells a story of flavor, comfort, and unforgettable moments. Crafted with love for true foodies.",
    img: banner1
  },
  {
    title: "Deshi Taste, Royal Experience",
    description: "From spicy street-style snacks to hearty home-style meals — Petuk Palace serves tradition with a touch of luxury.",
    img: banner2
  },
  {
    title: "Your Cravings, Our Command",
    description: "Order online and let Petuk Palace bring happiness to your plate — fast, fresh, and full of flavor!",
    img: banner3
  }
];


const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0); 
  }, []);

  return (
   <div className="relative">   
      <div className="absolute top-0 left-0 w-full z-20 text-gray-100">
          <div className='navbar max-w-7xl mx-auto px-4'>
            <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <><Link to='/' className='mb-1'>Home</Link></>
                        <><Link to='/reservation' className='mb-1'>Reservation</Link></>
                        <><Link to='/menu' className='mb-1'>Menu</Link></>
                        <><Link to='/about' className='mb-1'>About us</Link></>
                        <><Link to='/blog' className=''>Blog</Link></>
                    </ul>
                    </div>
                    <Link to='/' className="text-2xl lg:text-4xl font-barlow font-semibold hover:text-gray-400">Petuk Palace</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-barlow font-medium uppercase text-gray-200">
                        <><Link to='/' className='mr-8 hover:text-gray-400'>Home</Link></>
                        <><Link to='/reservation' className='mr-8 hover:text-gray-400'>Reservation</Link></>
                        <><Link to='/menu' className='mr-8 hover:text-gray-400'>Menu</Link></>
                        <><Link to='/about' className='mr-8 hover:text-gray-400'>About us</Link></>
                        <><Link to='/blog' className='hover:text-gray-400'>Blog</Link></>
                    </ul>
                </div>
                <div className="navbar-end text-white">
                    <NavEnd/>
                </div>
          </div>
      </div>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
      //   navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-[400px] lg:h-[680px] z-10"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
      >
        {bannerData.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-black bg-opacity-50 text-white">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
              >
                <h1 className="text-2xl lg:text-5xl font-semibold font-barlow">{slide.title}</h1>
                <p className="mt-4 text-gray-200 text-lg lg:max-w-xl">{slide.description}</p>
                <button className="mt-6 px-6 py-2 bg-gray-200 text-gray-900 uppercase font-medium hover:bg-gray-900 hover:text-gray-100 cursor-pointer">
                  Purchase
                </button>
              </motion.div>
            </div>
            <img className="object-cover w-full h-full" src={slide.img} alt={slide.title} />
          </SwiperSlide>
        ))}
        </Swiper>
   </div>
  );
};

export default Banner;