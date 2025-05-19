import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { TiShoppingCart } from 'react-icons/ti';
import { FaBoxOpen, FaUsers } from 'react-icons/fa';
import useUserData from '../../Hooks/useUserData';
import { MdInventory2 } from 'react-icons/md';

const Profile = () => {
  const { user } = useAuth();
  const { name, email ,role } = useUserData()
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://petuk-palace-server.vercel.app/cart/${user.email}`)
        .then(res => setCartItems(res.data));

      axios.get(`https://petuk-palace-server.vercel.app/orders/${user.email}`)
        .then(res => setOrders(res.data));
    }
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Profile Info */}
      <div className="bg-white shadow rounded-xl p-6 mb-8 flex items-center gap-6">
        <img
          src={user?.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
        />
         {
           role ==="admin" ?
           <div>
              <h2 className="text-2xl font-bold text-gray-800">{name || 'User Name'}</h2>
              <p className="text-gray-600">{email}</p>
              <p className="text-gray-600 capitalize">Role: {role}</p>
           </div>
           :
           <div>
            <h2 className="text-2xl font-bold text-gray-800">{name || 'User Name'}</h2>
            <p className="text-gray-600">{email}</p>
            <p className="text-sm text-gray-500 flex items-center gap-3 mt-1">
              <TiShoppingCart size={18} /> {cartItems.length} items in cart
              <FaBoxOpen size={18} className="ml-4" /> {orders.length} orders
            </p>
         </div>
         }
      </div>

      {
          role === 'admin' ?
          (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
            <FaUsers size={30} className="text-blue-600" />
            <div>
              <p className="text-xl font-semibold">40</p>
              <p className="text-gray-500 text-sm">Total Users</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
            <FaBoxOpen size={30} className="text-green-600" />
            <div>
              <p className="text-xl font-semibold">23</p>
              <p className="text-gray-500 text-sm">Total Orders</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
            <MdInventory2 size={30} className="text-purple-600" />
            <div>
              <p className="text-xl font-semibold">25</p>
              <p className="text-gray-500 text-sm">Total Products</p>
            </div>
          </div>
        </div>
      ) :
      (<div>
        <div className="bg-white shadow rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TiShoppingCart /> Recent Cart Items
          </h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3">
              {cartItems.slice(0, 3).map(item => (
                <li key={item._id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded object-cover" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Order Preview */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaBoxOpen /> Recent Orders
          </h3>
          {orders.length === 0 ? (
            <p className="text-gray-500">No orders found.</p>
          ) : (
            <ul className="space-y-4">
              {orders.slice(0, 3).map(order => (
                <li key={order._id} className="border-b pb-3">
                  <p className="font-medium">Order ID: <span className="text-gray-600">{order._id}</span></p>
                  <p>Total: ${order.totalAmount} | Status: <span className="capitalize">{order.status}</span></p>
                  <p className="text-lg text-gray-600">Items: {order.items.length}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>)
      }

      {/* Cart Preview */}

    </div>
  );
};

export default Profile;
