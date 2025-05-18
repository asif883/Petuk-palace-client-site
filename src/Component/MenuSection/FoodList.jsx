
const menuData = [
  {
    "id": 1,
    "name": "Herb-Grilled Chicken Steak",
    "price": "$18.99",
    "type": "Main Course",
    "description": "Juicy chicken steak grilled with herbs and savory spices.",
    "image": "https://i.ytimg.com/vi/xR6rTrhiZVU/maxresdefault.jpg"
  },
  {
    "id": 2,
    "name": "Classic Margherita Pizza",
    "price": "$14.99",
    "type": "Main Course",
    "description": "Fresh mozzarella, basil, and tomato sauce on crispy crust.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2w-6ljxAJtEImAJ4zBsRnou1CoSAVmgvQw&s"
  },
  {
    "id": 3,
    "name": "Crisp Caesar Garden Salad",
    "price": "$9.99",
    "type": "Appetizer",
    "description": "Crisp romaine, parmesan, croutons, and creamy Caesar dressing.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUO7I6p5hcfCMYa6URocjt0M1RzVEsf5fHg&s"
  },
  {
    "id": 4,
    "name": "Creamy Tomato Basil Soup",
    "price": "$7.99",
    "type": "Appetizer",
    "description": "Smooth tomato soup blended with fresh basil and cream.",
    "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-22858_12-a8c9d53.jpg?quality=90&resize=440,400"
  },
  {
    "id": 5,
    "name": "Garlic-Butter Seared Shrimp",
    "price": "$12.99",
    "type": "Appetizer",
    "description": "Tender shrimp sautéed in rich garlic butter sauce.",
    "image": "https://img-global.cpcdn.com/recipes/29225bef16c30f73/1200x630cq70/photo.jpg"
  },
  {
    "id": 6,
    "name": "Smoky Glazed BBQ Ribs",
    "price": "$22.99",
    "type": "Main Course",
    "description": "Fall-off-the-bone ribs glazed in smoky barbecue sauce.",
    "image": "https://www.allrecipes.com/thmb/I2ENWJQG1mb2b5OSXPqQudzlzJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/220987-Baked-BBQ-Baby-Back-Ribs-mfs-041-77a42b0ce0f0424e9aeec2b22664f1aa.jpg"
  },
  {
    "id": 7,
    "name": "Molten Chocolate Lava Cake",
    "price": "$8.99",
    "type": "Dessert",
    "description": "Warm chocolate cake with a rich molten center inside.",
    "image": "https://rhubarbandcod.com/wp-content/uploads/2022/02/Chocolate-Lava-Cakes-1.jpg"
  },
  {
    "id": 8,
    "name": "Classic Italian Tiramisu",
    "price": "$9.99",
    "type": "Dessert",
    "description": "Creamy layers of mascarpone, espresso-soaked cake, and cocoa.",
    "image": "https://i0.wp.com/mediterraneantaste.com/wp-content/uploads/2023/11/tiramisu-4583.jpg?w=1200&ssl=1"
  },
  {
    "id": 9,
    "name": "Chilled Caramel Latte Bliss",
    "price": "$5.99",
    "type": "Beverage",
    "description": "Iced caramel latte topped with frothy cream and sweetness.",
    "image": "https://images.ctfassets.net/v601h1fyjgba/6ITu38zjPd1RUxCxZnOkkN/26e2e4b4c0ffeeacab56648c86c79e7a/15697_Keurig_CafeCreations_Salted_Caramel_Latte_Iced_COMP_Hi__1_.jpg"
  },
  {
    "id": 10,
    "name": "Freshly Squeezed Orange Juice",
    "price": "$4.99",
    "type": "Beverage",
    "description": "Refreshing orange juice bursting with natural citrus flavor.",
    "image": "https://www.earthfoodandfire.com/wp-content/uploads/2018/04/Homemade-Orange-Juice.jpg"
  }
]

const handleOrderSubmit = (name) =>{
   console.log(name);
   alert("your order submitted")
}

  

const FoodList = () => {
    return (
        <div className="mt-16 max-w-7xl mx-auto px-4">

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menuData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 p-4"
          >
            <div className='flex items-center justify-between'>
                <h1 className='text-xl uppercase font-barlow font-semibold'>{item?.name}</h1>
                <p className='bg-gray-100 p-1 rounded-full font-semibold'>{item?.price}</p>
            </div>
            <p className='my-1 text-gray-600'>{item?.description}</p>
            <div className='flex justify-end mt-5'>
                <button onClick={()=> handleOrderSubmit(item?.name)} className='border border-gray-300 text-gray-800 px-2 py-1 font-semibold hover:bg-gray-800 hover:text-gray-200 cursor-pointer'>Order Now</button>
            </div>
          </div>
        ))}
        </div>

      </div>
    );
};

export default FoodList;
