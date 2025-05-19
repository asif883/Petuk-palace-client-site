import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/orders/${user?.email}`);
        setOrders(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error)
      }
    };

    fetchOrders();
  }, [user]);

  const handleDeleteOrder = (id) =>{
      Swal.fire({
      title: "Are you sure?",
      text: "Cancel this item from Order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Cancel it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/delete/${id}`)
          .then(() => {
            setOrders(orders.filter(item => item._id !== id));
            Swal.fire({
                title: 'Canceled!',
                text: "Order has been Canceled.",
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#18181B'
            });
          });
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>
      {loading ? (
        <Loading />
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="border rounded-lg p-6 shadow ">
              <div className="flex justify-between items-center mb-4">
                <p className="font-medium capitalize text-sm text-white px-3 py-1 rounded-full bg-gray-600">
                  {order?.status}
                </p>
                <button onClick={()=> handleDeleteOrder(order?._id)} className="cursor-pointer bg-red-600 p-2 text-gray-200 font-semibold">Cancel Order</button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 border p-2 rounded shadow-sm">
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover" />
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-gray-600 text-sm">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-right mt-4 font-semibold">
                Total: ${order.totalAmount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
