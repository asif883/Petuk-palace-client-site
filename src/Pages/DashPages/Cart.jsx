import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Loading/Loading";

const Cart = () => {
    const {user} = useAuth()
    const [cartItems, setCartItems] = useState([]);
    const [loading , setLoading] = useState(true)


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`https://petuk-palace-server.vercel.app/cart/${user?.email}`);
        setCartItems(res.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [user]);

  const handleRemove = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "Remove this item from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://petuk-palace-server.vercel.app/deleteItem/${id}`)
          .then(() => {
            setCartItems(cartItems.filter(item => item._id !== id));
            Swal.fire({
                title: 'Removed!',
                text: "Item has been removed.",
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#18181B'
            });
          });
      }
    });
  };


const handleOrder = () => {
  const orderData = {
    userEmail: user.email,
    items: cartItems,
    totalAmount: totalPrice,
    status: 'pending',
    orderDate: new Date()
  };

  axios.post('https://petuk-palace-server.vercel.app/orders', orderData)
    .then(res => {
      if (res.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Your order has been placed.',
          icon: 'success',
          confirmButtonColor: '#18181B'
        });

        axios.delete(`https://petuk-palace-server.vercel.app/deleteItems/${user?.email}`)
          .then(res => {
            console.log("Cart cleared:", res.data);
            setCartItems([]);
          });
      }
    })
    .catch(err => {
      console.error("Error placing order:", err);
      Swal.fire("Error", "Failed to place order. Try again later.", "error");
    });
};




  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Ready to Checkout?</h1>
        {
            loading ? <Loading/>
            :
            <div className="grid md:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="md:col-span-2 space-y-4">
                {cartItems.length === 0 ? (
                    <p className="text-gray-600 text-center text-xl lg:text-2xl ">Your cart is empty.</p>
                ) : (
                    cartItems.map(item => (
                    <div
                        key={item._id}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
                    >
                        <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                        <div>
                            <h2 className="font-semibold text-lg">{item.title}</h2>
                            <p className="text-sm text-gray-500">${item.price}</p>
                        </div>
                        </div>
                        <button
                        onClick={() => handleRemove(item?._id)}
                        className="text-red-500 hover:underline cursor-pointer"
                        >
                        Remove
                        </button>
                    </div>
                    ))
                )}
                </div>

                {/* Summary */}
                <div className="bg-gray-100 p-6 rounded-lg shadow h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                    <span>Total Items:</span>
                    <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span>Total Price:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button
                    onClick={()=> handleOrder()}
                    disabled={cartItems.length === 0}
                    className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition cursor-pointer"
                >
                    Place Order
                </button>
                </div>
            </div>
        }
       
    </div>
  );
};

export default Cart;
