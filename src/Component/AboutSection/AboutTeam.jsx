import React from 'react';
import team from '../../assets/about-team.jpg'
import '../../CSS/font.css'

const AboutTeam = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-16 mt-8">
            {/* About Us Section */}
            <div className="flex flex-col lg:flex-row items-center gap-5 px-5">
               <div className='flex-1'>
                    <h2 className="text-4xl font-barlow uppercase font-bold text-gray-900">Who We Are</h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                    At Petuk Palace, We bring the finest flavors to your plate with fresh ingredients, skilled chefs, and a passion for food. 
                    Our mission is to offer an unforgettable dining experience with a mix of tradition and innovation.
                    </p>
               </div>
               <img className='flex-1' src={team} alt="Team" />
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gray-100 rounded-lg px-10 py-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 text-center">
                <div className="p-6 bg-white shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold">Fresh Ingredients</h3>
                    <p className="mt-2 text-gray-600">We use only the freshest and highest-quality ingredients for our dishes.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold">Expert Chefs</h3>
                    <p className="mt-2 text-gray-600">Our chefs bring years of experience to create delicious, mouth-watering meals.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold">Cozy Ambience</h3>
                    <p className="mt-2 text-gray-600">Enjoy a relaxing dining experience with a warm and inviting atmosphere.</p>
                </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Meet Our Chefs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                <div className="p-6 bg-white shadow-md rounded-lg">
                    <img
                    src="https://www.elevaterapidcity.com/images/Article_Photos/Restaurant_Week/Hotel_Alex_Johnson_Downtown_Restaurant_Week_Rapid_City_Chef_Chris_med.jpg"
                    alt="Chef Alex"
                    className="w-full h-48 object-cover rounded-md"
                    />
                    <h3 className="text-xl font-semibold mt-4">Chef Alex Johnson</h3>
                    <p className="text-gray-600">Master of gourmet dishes with over 15 years of experience.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded-lg">
                    <img
                    src="https://lecordonbleusunway.com.my/wp-content/uploads/2022/08/Become-A-Master-Chef.jpg"
                    alt="Chef Sophia"
                    className="w-full h-48 object-cover rounded-md"
                    />
                    <h3 className="text-xl font-semibold mt-4">Chef Sophia Lee</h3>
                    <p className="text-gray-600">Expert in fusion cuisine and innovative flavors.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded-lg">
                    <img
                    src="https://media.licdn.com/dms/image/v2/D4D22AQGxT_A7RFJxqQ/feedshare-shrink_800/feedshare-shrink_800/0/1722949242522?e=2147483647&v=beta&t=-rRQxho_JLbLvItcczwwzEzb28-4zrZ06dwVA0XvX2g"
                    alt="Chef Marco"
                    className="w-full h-48 object-cover rounded-md"
                    />
                    <h3 className="text-xl font-semibold mt-4">Chef Marco Rossi</h3>
                    <p className="text-gray-600">Specializes in authentic Italian and Mediterranean cuisine.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;