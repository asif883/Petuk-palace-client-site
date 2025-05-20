import React from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const reviews = [
    {
      "id": 1,
      "name": "Sophia Carter",
      "image": "https://media.licdn.com/dms/image/v2/D4E03AQFfHzLkk7z0jQ/profile-displayphoto-shrink_200_200/B4EZVm1omYGYAY-/0/1741187091301?e=2147483647&v=beta&t=jYQBUgr1JskXG81xfEPJnnRGqVHN2Gb6LZnzpnr89yc",
      "rating": 5,
      "review": "Absolutely loved the food! The flavors were amazing, and the service was top-notch. Highly recommend!"
    },
    {
      "id": 3,
      "name": "Emma Wilson",
      "image": "https://photos.psychologytoday.com/69ddc136-8b2e-48d3-ac4e-75857b8b4d33/2/320x400.jpeg",
      "rating": 4.5,
      "review": "One of the best dining experiences I've had. The steak was cooked perfectly, and the desserts were heavenly!"
    },
    {
      "id": 4,
      "name": "Daniel Brown",
      "image": "https://image.tmdb.org/t/p/w500/xDsPJNDnrn3N0jelVrxdOchzhoo.jpg",
      "rating": 4,
      "review": "Really enjoyed the meal. Everything was fresh and flavorful. The service could be a bit faster, though."
    }
];

const myStyles = {
    itemShapes: Star,
    activeFillColor: '#1F2937',
    inactiveFillColor: '#E0E0E0'
  }

const Review = () => {
    return (
        <div className="my-16 max-w-7xl mx-auto">
            <div className="text-center flex gap-3 flex-col items-center justify-center">
                <FaQuoteRight size={36} />
                <h1 className="text-4xl font-barlow font-bold uppercase">Happy Customers</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-5 mt-8">
                {
                    reviews.map((review) => (
                        <div key={review.id} className="p-6 text-center space-y-4">
                            <img src={review.image} alt={review.name} className="w-28 h-28 rounded-full mx-auto object-cover" />
                            <h1 className="text-xl font-bold">{review.name}</h1>
                            <p className="text-gray-600">{review.review}</p>
                          
                           <div className='flex justify-center'>
                            <Rating
                                    value={review.rating}
                                    readOnly
                                    style={{ maxWidth: 120 }}
                                    itemStyles={myStyles}       
                                />
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Review;