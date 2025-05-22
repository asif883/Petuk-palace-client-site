import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useUserData from "../../Hooks/useUserData";
import Loading from "../../Loading/Loading";

  

const FoodList = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const {role} = useUserData()
    const [cartItems , setCartItems] = useState([])
    const [allMenuData , setMenuData] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
      const fetch= () =>{
       axios.get(`https://petuk-palace-server.vercel.app/cart/${user?.email}`)
         .then(res =>{
          setCartItems(res.data)
         })
         }
      fetch()
   },[user])

   useEffect(()=> {
      fetch('https://petuk-palace-server.vercel.app/menu')
      .then( res => res.json())
      .then( data => {
          setMenuData(data)
          setLoading(false)
      })
   }, [])

  const handleOrderSubmit = (item) => {
    if (!user) {
      return navigate('/login');
    }

    const title = item.title;
    const userEmail = user?.email;
    const image = item.image;
    const price = parseFloat(item.price);

    const cartInfo = {
      title,
      userEmail,
      image,
      price
    };

    const isAlreadyAdded = cartItems.some(cartItem => cartItem.title === item.title);

    if (isAlreadyAdded) {
      return Swal.fire({
        title: "Check Your Cart!!!",
        text: "The Product Already Added To Your Cart",
        icon: "question",
        confirmButtonColor: '#18181B'
      });
    }

    axios.post('https://petuk-palace-server.vercel.app/cart', cartInfo)
      .then(res => {
        if (res.data.insertedId) {
          setCartItems(prev => [...prev, cartInfo]);
          Swal.fire({
            title: 'Success!',
            text: `${item?.title} added to Your cart`,
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#18181B'
          });
        }
      });
  };

    return (
        <div className="mt-16 max-w-7xl mx-auto px-4">

          {
             loading ? <Loading/>
             :
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {allMenuData?.map((item) => (
                <div
                  key={item._id}
                  className="border border-gray-300 p-4"
                >
                  <div className='flex items-center justify-between'>
                      <h1 className='text-lg md:text-xl uppercase font-barlow font-semibold'>{item?.title}</h1>
                      <p className='bg-gray-100 p-1 rounded-full font-semibold'>${item?.price}</p>
                  </div>
                  <p className='my-1 text-gray-600'>{item?.description}</p>
                  <div className='flex justify-end mt-5'>
                          {
                            role === 'admin' ? 
                            <></> 
                            :
                            <button onClick={()=> handleOrderSubmit(item)} className='border border-gray-300 text-gray-800 px-2 py-1 font-semibold hover:bg-gray-800 hover:text-gray-200 cursor-pointer'>Add to Cart</button>
                          }
                  </div>
                </div>
              ))}
          </div>
          }
  
        

      </div>
    );
};

export default FoodList;
