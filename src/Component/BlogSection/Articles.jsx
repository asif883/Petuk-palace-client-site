import { SlNote } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import '../../CSS/font.css'
import { Link } from "react-router-dom";


const blogData = [
  {
    id: 1,
    name: "John Doe",
    title: "Mastering the Art of Pasta: A Culinary Guide",
    date: "2025-03-23",
    category: "Italian",
    likes: 120,
    description:
      "Pasta, a staple of Italian cuisine, is cherished across the globe for its versatility and comforting flavor. To cook pasta to perfection, one must begin with high-quality ingredients. Fresh flour and eggs are key for homemade pasta dough, while store-bought dry pasta should be chosen from trusted brands that maintain texture when cooked. The foundation of a good pasta dish is also the sauce. A classic tomato sauce made from ripe tomatoes, garlic, basil, and olive oil brings out traditional Italian flavors. Equally important is understanding how to cook pasta properly. It must be boiled in a generous amount of salted water to infuse flavor directly into the noodles. Cooking until al dente—firm to the bite—prevents mushiness and improves texture. Never rinse the pasta after draining; the surface starch helps the sauce adhere. When combining pasta with sauce, finish cooking it in the pan with the sauce to allow the flavors to blend. Small additions like a knob of butter, a splash of reserved pasta water, or a sprinkle of parmesan can elevate the final dish. Different shapes pair better with certain sauces—penne with chunky sauces, spaghetti with smooth ones. Garnishing with fresh herbs or a drizzle of olive oil adds color and aroma. Pasta isn't limited to Italian dishes either—it’s used worldwide in various forms, showing its adaptability. Whether it’s baked lasagna, creamy Alfredo, or a cold pasta salad, the possibilities are endless. The key to exceptional pasta lies in respecting the process, using fresh ingredients, and understanding how each element—from boiling water to sauce consistency—affects the result. With practice and care, anyone can transform a simple pasta meal into a gourmet experience.",
    image:
      "https://assets.epicurious.com/photos/5605871362fa7a9917c15e47/6:4/w_1600%2Cc_limit/EP_09242015_Maialino_03.jpg"
  },
  {
    id: 2,
    name: "Emma Smith",
    title: "A World of Heat: Exploring the Spiciest Global Delights",
    date: "2025-03-20",
    category: "Spicy",
    likes: 95,
    description:
      "For those who crave bold and fiery flavors, the world offers a treasure trove of spicy dishes that challenge the senses and ignite the palate. From the smoky heat of Mexican habanero salsas to the intense burn of India’s Phaal curry, spice plays a central role in many cultures. The thrill of spice isn’t just about pain—it’s about flavor, depth, and tradition. In India, Phaal curry is made with Ghost Peppers and intense spice blends, served to only the bravest diners. In China, Sichuan Hot Pot uses Sichuan peppercorns to deliver a numbing, spicy experience that’s unlike any other. The broth bubbles with chili oil, garlic, and peppercorns that envelop every bite in heat. Mexico’s Habanero Salsa combines citrus and spice for a fresh but dangerous kick. Thai cuisine offers Som Tum and spicy curries, where heat is balanced by sweetness and acidity. Korea’s Buldak—‘fire chicken’—uses gochujang and chilies to create an addictively spicy dish. The Caribbean’s Moruga Scorpion Chili Sauce can test the limits of even the most seasoned spice lover. Each region uses spice differently, blending it with other ingredients to create complex flavor profiles. Spice has also been shown to boost metabolism and increase endorphins, adding a health benefit to the flavor punch. For home cooks, mastering spicy dishes means understanding how to balance heat with other elements—sweet, sour, salty, and savory. Whether you’re making a chili-infused stir fry or marinating meat with hot sauce, it’s all about layering flavors. Spicy dishes also build community—sharing hot food and challenging each other creates memorable dining moments. If you’re a fan of spice, exploring these global dishes will expand your culinary horizons and introduce you to exciting, bold flavors. Just be sure to keep a glass of milk nearby!",
    image:
      "https://img.freepik.com/vector-premium/comida-picante-articulo-pimiento-picante_858664-4820.jpg"
  },
  {
    id: 3,
    name: "Michael Brown",
    title: "Fuel Your Day: Energizing Breakfasts That Nourish and Delight",
    date: "2025-03-18",
    category: "Healthy",
    likes: 85,
    description:
      "A nutritious breakfast sets the tone for the entire day. It fuels the body and mind, boosts metabolism, and improves concentration. While skipping breakfast may seem convenient, a well-balanced morning meal provides essential nutrients and energy to power through daily tasks. Smoothie bowls are a great way to combine fruits, yogurt, and seeds into one vibrant dish. They’re easy to prepare and packed with vitamins, fiber, and antioxidants. Overnight oats, soaked in milk or yogurt and topped with fruit and nuts, offer a hearty option without cooking. Avocado toast on whole-grain bread with a poached egg provides healthy fats and protein, keeping you full longer. Vegetable omelets are another excellent choice, rich in protein and packed with fiber and vitamins. For those with sweet preferences, Greek yogurt parfaits with berries, honey, and granola combine taste and nutrition in one bowl. Including fresh fruit, such as bananas or oranges, adds natural sweetness and hydration. Even a simple bowl of whole-grain cereal with low-fat milk can be beneficial when time is limited. The key is to include a balance of macronutrients—protein, carbohydrates, and fats—to support your energy levels and digestive health. Breakfast can also be a mindful moment before the rush begins. Preparing it yourself adds control over ingredients and encourages healthier habits. Hydration is also crucial—start the day with a glass of water or green tea. Eating breakfast regularly helps regulate blood sugar, reduces cravings, and supports weight management. It’s not about complexity but consistency. Whether you’re a student, professional, or stay-at-home parent, taking a few extra minutes for breakfast can lead to increased productivity and better health. So, embrace the morning, fuel up right, and give your body the strong start it deserves every single day.",
    image:
      "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/GettyImages-1399211781_544809_hqxsgx.jpg"
  },
  {
    id: 4,
    name: "Sophia Lee",
    title: "Rolling Perfection: Unlocking the Secrets of Great Sushi",
    date: "2025-03-15",
    category: "Japanese",
    likes: 110,
    description:
      "Sushi, a symbol of Japanese culinary precision, is both an art and a tradition. Making sushi at home or professionally requires careful attention to detail, fresh ingredients, and a respect for the process. The most important component is the rice—short-grain, sticky rice prepared with vinegar, sugar, and salt. This gives sushi its iconic texture and flavor. Choosing fish is equally vital. It must be fresh, sushi-grade, and stored properly to ensure safety and taste. Salmon, tuna, and shrimp are popular options, each offering unique textures. Rolling sushi is a skill that takes practice. Using a bamboo mat, ingredients are tightly wrapped in nori sheets with rice, vegetables, and fish. Maki rolls, with seaweed on the outside, and uramaki, with rice on the outside, are popular styles. Nigiri—small rice balls topped with sliced fish—require delicate hand-shaping and balance. Presentation matters in sushi. The arrangement, colors, and garnishes like sesame seeds, wasabi, and pickled ginger all add to the dining experience. Sauces such as soy sauce or spicy mayo complement the flavor. Sushi is also healthy, offering lean protein, omega-3s, and essential nutrients. When making sushi at home, preparation is key. All tools and ingredients should be ready before you begin. Don’t overload your rolls—less is more. Practice clean cuts with a sharp knife and moistened blade to prevent sticking. With patience, your rolls will become more uniform and attractive. Sushi isn’t just food; it’s a tradition rooted in respect, simplicity, and harmony. Each bite should reflect care and craftsmanship. Whether enjoyed in a high-end restaurant or created in your kitchen, sushi celebrates the beauty of fresh ingredients and skilled hands. Mastering sushi brings joy, creativity, and a deeper appreciation for one of the world’s most refined cuisines.",
    image:
      "http://kikkoman.eu/fileadmin/_processed_/e/7/csm_Blog_CreativewithSushi_Header_Desktop_d3e3817211.webp"
  },
  {
    id: 5,
    name: "David Miller",
    title: "Street Eats: Tasting Cultures Through Global Street Food",
    date: "2025-03-10",
    category: "Street Food",
    likes: 130,
    description:
      "Street food offers an exciting way to explore cultures, flavors, and traditions—all from a roadside vendor or market stall. Across the globe, bustling streets are filled with the aromas of freshly grilled, fried, and stewed delicacies. These quick, affordable meals provide an authentic taste of local life. In Mexico, Tacos al Pastor are made with marinated pork sliced off a spit, topped with pineapple and cilantro. In Thailand, street vendors whip up Pad Thai with rice noodles, shrimp, eggs, peanuts, and lime—sweet, salty, and tangy in one bite. India’s Pani Puri is a flavorful explosion—crispy shells filled with spicy water, chutney, and mashed potatoes. In Turkey, Döner Kebabs feature tender meat wrapped in bread with vegetables and sauces. Japan’s Takoyaki, or octopus balls, are crispy on the outside, soft inside, and topped with bonito flakes and special sauce. Each country has its own specialties that highlight regional ingredients and cooking methods. Street food also fosters community. Crowds gather around popular stalls, sharing meals, stories, and laughter. Vendors pass down recipes through generations, preserving culinary heritage. Despite being quick bites, many of these dishes require serious skill. The speed and precision of street chefs is impressive—watching them cook is part of the charm. Street food also adapts with time. Many vendors innovate, fusing global influences or catering to dietary needs. In cities like New York, Tokyo, or Dhaka, you’ll find street eats blending tradition and creativity. Hygiene has improved as food trucks and carts follow regulations, making it safer to enjoy these delights. Whether you’re traveling or exploring your local scene, street food is a must-try culinary adventure. It’s not just about eating—it’s about tasting the heart of a place, one delicious bite at a time.",
    image:
      "https://amazingfoodanddrink.com/wp-content/uploads/2024/05/85081.jpg"
  }
];




const popularArticles =  [
    {
      "id" : 1 ,
      "image": "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2024/07/11111642/Street-food-scaled.jpeg",
      "title": "Must-Try Street Foods",
      "date": "Mar 15, 2025"
    },
    {
        "id" : 2,
        "image": "https://journal.swaledale.co.uk/wp-content/uploads/2022/03/how-to-cook-Ribeye-Steak.jpg",
        "title": "Perfectly Cooked Steak",
        "date": "Feb 28, 2025"
    },
    {
      "id" : 3,
      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/wdp-breakfast-avocadoeggontoast_02095-1-e34ed8c.jpg?quality=90&resize=556,505",
      "title": "Healthy Breakfast Ideas",
      "date": "Jan 20, 2025"
    },
    {
      "id" : 4,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qytC4oKtyh3Xa6usUbYpYWVOc_C8bJ3UjQ&s",
      "title": "Authentic Italian Pasta",
      "date": "Apr 05, 2025"
    },
    {
      "id" : 5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKjsmMtV5zo93zL69hkiYYssrvGXaB7bIpA&s",
      "title": "Wine & Food Pairing",
      "date": "Mar 10, 2025"
    }
];

  
  
const Articles = () => {
    return (
        <div className='px-5 mt-10 max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12'>
                <div className='col-span-8'>
                    {
                        blogData.map((data, idx) =><div className='mb-12' key={idx}>
                            <div className="relative overflow-hidden group">
                                <img 
                                    className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105" 
                                    src={data?.image} 
                                    alt="image" 
                                />
                            
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            </div>
                            <h1 className='mt-3 mb-2 text-3xl font-semibold font-barlow'>{data?.title}</h1>
                            <div className='flex gap-6 font-medium'>
                                <p className='flex items-center gap-2'>
                                    <span>
                                        <SlNote/>
                                    </span>
                                    {data?.name}
                                </p>
                                <p className='flex items-center gap-2'>
                                    <span>
                                        <FaRegHeart/>
                                    </span>
                                    {data?.likes}
                                </p>
                                <p className='flex items-center gap-2'>
                                    <span>
                                        <IoPricetagOutline/>
                                    </span>
                                    {data?.category}
                                </p>
                            </div>
                            <p className='text-gray-600 max-w-4xl mt-3 border-b-2 border-dotted border-gray-900 pb-7'>{data?.description.slice( 0, 300 )}.....<a href='#' className='text-blue-500'>read more</a></p> 
                            <div className='mt-8  flex items-center'>
                                <p className='text-gray-900 text-xl font-medium mr-3'>Share</p>
                                <div className='flex gap-2'>
                                    <a href=""><FaFacebook size={22}/></a>
                                    <a href=""><FaInstagram size={22}/></a>
                                    <a href=""><FaYoutube size={22}/></a>
                                    <a href=""><FaTwitter size={22}/></a>
                                    <a href=""><FaLinkedin size={22}/></a>       
                                </div>
                            </div>
                        </div>)
                    }
                    
                </div>

                <div className='col-span-4 ml-0 lg:ml-10'>
                    <h2 className='text-2xl font-semibold font-barlow uppercase'>Recent Article</h2>
                    <ul className="space-y-3 mt-5 text-gray-600">
                        {
                        blogData?.map((data) => 
                        <li className='border-b border-gray-200 pb-2' key={data?.id}>
                            <Link href={'#'} className="hover:underline flex gap-2 items-center ">
                            <IoIosArrowForward/>
                            {data?.title}
                            </Link>
                        </li> 
                        )
                        }
                    </ul>

                    <h3 className='text-2xl font-semibold font-barlow uppercase my-6 '>Popular Article</h3>
                    <div>
                        {
                            popularArticles?.map((blog) => 
                             <div className='mb-4 flex gap-2 items-center border-b border-gray-200 pb-2' key={blog?.id}>
                                <img className='w-24' src={blog?.image} alt="" />
                                <div className="">
                                    <Link href={'#'} className='text-gray-700 mb-1'>{blog?.title}</Link>
                                    <p className='text-sm text-gray-600'>{blog?.date}</p>
                                </div>
                             </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;