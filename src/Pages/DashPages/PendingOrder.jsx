import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Loading from '../../Loading/Loading';

const PendingOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(orders);
    useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`https://petuk-palace-server.vercel.app/allOrder`);
        setOrders(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error)
      }
    };

    fetchOrders();
  }, [user]);

    return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Pending Orders</h1>

      {loading ? (
        <Loading />
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No pending orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <p className="text-sm px-3 py-1 rounded-full font-medium capitalize bg-yellow-100 text-yellow-700 w-fit">
                  {order?.status}
                </p>
                <div className="text-right text-sm text-gray-600">
                  <p className="font-medium text-gray-700">User: <span className="text-blue-600">{order?.userEmail}</span></p>
                  <p>Order ID: <span className="text-gray-500">{order?._id.slice(-6).toUpperCase()}</span></p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 border border-gray-200 p-3 rounded-lg shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-right mt-4 flex justify-between items-center">
                <p className="font-semibold text-lg">
                    Total: <span className="text-green-600">${order.totalAmount.toFixed(2)}</span>
                </p>
                <button
                    
                    className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition cursor-pointer"
                >
                    Mark as Success
                </button>
             </div>
            </div>
          ))}
        </div>
      )}
    </div>
    );
};

export default PendingOrder;