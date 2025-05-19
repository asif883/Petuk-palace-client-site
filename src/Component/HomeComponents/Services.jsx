import React from 'react';
import background from '../../assets/background-2.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MdBrunchDining } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { TbTimelineEventExclamation } from "react-icons/tb";


const items = [
    {
      "id": 1,
       icon: <MdBrunchDining/>,
      "title": "Dine-In Experience",
      "description": "Enjoy a cozy ambiance served fresh to your table with exceptional hospitality."
    },
    {
      "id": 2,
      icon: <MdOutlineDeliveryDining/>,
      "title": "Online Ordering",
      "description": "Order your favorite meals online and get them delivered hot."
    },
    {
      "id": 3,
      icon: <TbToolsKitchen2/>,
      "title": "Catering Services",
      "description": "Make your events memorable with our special catering services."
    },
    {
      "id": 4,
      icon: <TbTimelineEventExclamation/>,
      "title": "Private Events",
      "description": "Host your private gatherings with us and enjoy a personalized dining experience."
    },
    {
      "id": 5,
      icon: <RiFlightTakeoffFill/>,
      "title": "Takeaway Service",
      "description": "Grab your favorite meals on the go with our fast and convenient takeaway service."
    }
  ]
  
  
  

const Services = () => {
    return (
        <div className="relative h-[550px] bg-fixed" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/80"></div> 

            {/* Content */}
            <div className="relative text-center text-white pt-16 px-6">
                <h1 className="text-2xl lg:text-4xl font-barlow font-bold mb-6 uppercase"> Our Exceptional Services – Crafted for You</h1>
                <p className="text-sm lg:text-lg text-gray-300">
                We offer a premium dining experience with top-quality ingredients, exquisite flavors, and outstanding customer service. Whether dining in, <br /> ordering takeout, or catering for special events, we ensure satisfaction in every bite.
                </p>

                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                breakpoints={{
                0: {
                  slidesPerView: 1
                },
                640: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
              navigation
              pagination={{ clickable: true }}
               
                className="max-w-7xl mx-auto mt-12"
                >
                    {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="max-w-sm bg-white overflow-hidden">
                        {/* Image Section */}
                            <div className="flex items-center justify-center mt-5">
                                <p className='text-gray-900 text-4xl bg-gray-100 p-4 rounded-full'>{item.icon}</p>
                            </div>

                            {/* Text Section */}
                            <div className="p-6 text-center">
                                <h2 className="text-xl font-bold font-barlow uppercase text-gray-800">{item.title}</h2>
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

export default Services;
