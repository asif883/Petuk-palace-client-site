import React from 'react';
import '../../CSS/font.css'


const allData = [
  {
    "id": 1,
    "title": "Nourish Naturally",
    "description": "Clean, balanced meals made to fuel your day naturally.",
    "image": "https://img1.wsimg.com/isteam/stock/12032/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280"
  },
  {
    "id": 2,
    "title": "Mediterranean Flavors",
    "description": "Inspired by coastal herbs, olive oil, and grilled goodness.",
    "image": "https://i.nextmedia.com.au/Utils/ImageResizer.ashx?n=https%3A%2F%2Fi.nextmedia.com.au%2FNews%2F20231130122520_the-Modern-Mediterranean-diet.jpg&h=630&w=1120&c=1&s=1"
  },
  {
    "id": 3,
    "title": "Wholesome Eating",
    "description":  "Nutritious meals with fresh ingredients and natural seasoning always.",
    "image": "https://www.happiesthealth.com/wp-content/uploads/2024/04/World-Health-day-copy-Wholesome-nutrition-Article.webp"
  },
  {
    "id": 4,
    "title": "Farm-Fresh Picks",
    "description": "Crisp vegetables, herbs, and proteins straight from the source.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkszqaneYROsY7yEap7MCjEOjV6PwuRRRsu3AdJmPAUxONxKa3mr3cD3K80nwWY6_GOA&usqp=CAU"
  }
]

const FoodQuality = () => {
    return (
        <div className='bg-[#EBEBEB] py-28 px-2'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl font-bold font-barlow mb-2 uppercase'>Wellness on Your Plate</h1>
                <p className='text-gray-600 text-lg'>Balanced meals made from the freshest picks — delicious, light, and guilt-free.</p>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center max-w-7xl mx-auto'>
                    {
                        allData?.map((data) => <div className='text-center bg-gray-50 p-4' key={data?.id}>
                            <img className='w-24 h-20 object-cover mx-auto rounded-full' src={data.image} alt="" />
                            <h2 className='text-xl font-semibold my-3 font-barlow uppercase'>{data.title}</h2>
                            <p className='text-gray-600'>{data.description}</p>
                        </div>)
                    }
                </div>
            </div>  
        </div>
    );
};

export default FoodQuality;