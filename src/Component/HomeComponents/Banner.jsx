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
              <button className="mt-6 px-6 py-2 bg-[#FFD71B] text-gray-900 uppercase font-medium hover:bg-gray-900 hover:text-gray-100">
                Purchase
              </button>
            </motion.div>
          </div>
          <img className="object-cover w-full h-full" src={slide.img} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;