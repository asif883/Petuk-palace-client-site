import React from 'react';
import background from '../../assets/background-1.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
  {
    id: 1,
    name: "Kacchi Biryani",
    price: 49,
    description:
      "Aromatic basmati rice layered with marinated mutton, saffron, and traditional spices — a royal Dhaka favorite.",
    image:
      "https://sultansdinebd.com/wp-content/uploads/2020/08/6-kacchi-full-scaled.jpg"
  },
  {
    id: 2,
    name: "Shorshe Ilish",
    price: 28,
    description:
      "Hilsha fish cooked in mustard seed paste with mustard oil and green chilies — served with plain rice.",
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2021/08/Shorshe-ilish.jpg"
  },
  {
    id: 3,
    name: "Beef Kala Bhuna",
    price: 35,
    description:
      "Slow-cooked beef in traditional black masala — smoky, spicy, and deeply flavorful, perfect with paratha or pulao.",
    image:
      "https://i.ytimg.com/vi/7bQxh-ewDjk/maxresdefault.jpg"
  },
  {
    id: 4,
    name: "Panta Ilish",
    price: 22,
    description:
      "Fermented rice with fried hilsha, onion, green chili, and mustard oil — a nostalgic Bengali New Year favorite.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Panta_Ilish.jpg"
  },
  {
    id: 5,
    name: "Chicken Rezala",
    price: 26,
    description:
      "Tender chicken pieces simmered in a mildly spiced, creamy yogurt-based gravy — often enjoyed with paratha or naan.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWfdzKZBjTj8rQCyegl1E_6SuYeKOI9kbFg&s"
  }
];

  
  

const ChefRecommendation = () => {
    return (
        <div className="relative h-[750px] bg-fixed" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/80"></div> 

            {/* Content */}
            <div className="relative text-center text-white pt-16 px-6">
                <h1 className="text-2xl lg:text-4xl font-barlow font-bold mb-6 uppercase">Chef’s Special Picks – Handcrafted with Perfection</h1>
                <p className="text-sm lg:text-lg text-gray-300">
                    Indulge in our chef’s finest creations, meticulously crafted to bring out the best flavors. 
                    Each dish is made with handpicked <br /> ingredients, expert techniques, and a passion for culinary excellence.
                </p>

                <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
                }}
                navigation
                pagination={{ clickable: true }}
               
                className="max-w-7xl mx-auto mt-12"
                >
                    {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="max-w-sm bg-gray-100 overflow-hidden">
                        {/* Image Section */}
                            <div className="relative">
                                <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
                                <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-200 text-black font-bold px-3 py-3 rounded-full shadow-md">
                                ${item.price}
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="p-6 text-center mt-6">
                                <h2 className="text-xl font-bold font-barlow uppercase text-gray-800">{item.name}</h2>
                                <p className="text-gray-600 mt-3">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default ChefRecommendation;