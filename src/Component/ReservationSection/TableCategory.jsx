import React from 'react';
const tables = [
    {
      "id": 1,
      "name": "Standard Table",
      "image": "https://img.freepik.com/free-photo/tables-chairs-arranged-empty-coffee-shop_107420-96463.jpg",
      "price": "$20 per person",
      "capacity": "Up to 4 people",
      "description": "Perfect for casual dining with friends and family. Enjoy a cozy atmosphere with comfortable seating."
    },
    {
      "id": 2,
      "name": "VIP Table",
      "image": "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/29/22/a3/vip-room-1.jpg",
      "price": "$50 per person",
      "capacity": "Up to 6 people",
      "description": "An exclusive VIP experience with premium seating, personalized service, and a private dining space."
    },
    {
      "id": 3,
      "name": "Romantic Table",
      "image": "https://i.pinimg.com/736x/20/01/d3/2001d3cd8a04369ebe5c909c1e85b3ff.jpg",
      "price": "$70 per couple",
      "capacity": "For 2 people",
      "description": "Designed for a romantic evening with candlelight ambiance, intimate seating, and a special menu."
    }
  ]
  
const TableCategory = () => {
    return (
        <div className='mt-16 max-w-7xl mx-auto px-3'>
            <div className='text-center'>
                <h1 className="text-4xl font-bold font-barlow">Choose Your Perfect Dining Experience</h1>
                <p className='text-gray-700 text-lg mt-3'>Select from our carefully curated table options—whether it’s a cozy gathering, a VIP experience, or a romantic evening. <br /> Reserve now and enjoy exceptional dining tailored to your preference!</p>
            </div>
            <div className='flex gap-10 flex-col lg:flex-row items-center mt-8'>
                {
                    tables?.map((table) => 
                        <div key={table.id}>
                            <div className="bg-white overflow-hidden">
                            {/* Image Section */}
                                <div className="relative">
                                    <img src={table.image} alt={table.name} className="w-full h-56 object-cover"/>
                                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-100 text-gray-800 font-bold px-3 py-3 rounded-full capitalize">
                                    {table.price}
                                    </div>
                                </div>
    
                                {/* Text Section */}
                                <div className="pt-6 mt-6">
                                    <h2 className="text-xl font-bold flex items-center gap-3 font-barlow uppercase text-gray-800">{table.name} <span className='capitalize text-lg font-medium'> ( {table.capacity})</span></h2>
                                    <p className="text-gray-600 mt-3 font-medium">{table.description}</p>
                                </div>
                                
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TableCategory;
