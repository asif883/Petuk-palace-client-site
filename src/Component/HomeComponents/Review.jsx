import React from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const reviews = [
    {
      "id": 1,
      "name": "Sophia Carter",
      "image": "https://image.maxpreps.io/rosters/cd2b6c0f-a414-4537-a8d8-354089d85a2c/3/5/9/35954e27-3b79-4c87-965a-006f2893d113/original.jpg?version=638721408818697104&width=1024&crop=1:1,smart",
      "rating": 5,
      "review": "Absolutely loved the food! The flavors were amazing, and the service was top-notch. Highly recommend!"
    },
    {
      "id": 3,
      "name": "Emma Wilson",
      "image": "https://m.media-amazon.com/images/M/MV5BZDE2NTMxY2EtZDYwNC00YmQ5LTg0ZDgtNzFhMzJlMmYxYWZlXkEyXkFqcGc@._V1_.jpg",
      "rating": 4.5,
      "review": "One of the best dining experiences I've had. The steak was cooked perfectly, and the desserts were heavenly!"
    },
    {
      "id": 4,
      "name": "Daniel Brown",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMz4TQqmM0TI7Pk9vCbh2O3MeRWNgxj0SZ7g&s",
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