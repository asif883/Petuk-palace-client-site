import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4000 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 7000 },
];

const colors = ['#3B82F6', '#6366F1', '#10B981', '#F59E0B', '#EF4444', '#14B8A6'];

const Overview = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Petek Palace Overview</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <p className="text-gray-500">Total Visitors</p>
          <h2 className="text-2xl font-bold text-blue-600">12,345</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <p className="text-gray-500">Bookings</p>
          <h2 className="text-2xl font-bold text-green-600">2,540</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold text-purple-600">$42,300</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <p className="text-gray-500">Reviews</p>
          <h2 className="text-2xl font-bold text-yellow-600">984</h2>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-2xl shadow w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Sales</h2>
       <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid  strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip
            contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', color: '#F3F4F6' }}
            itemStyle={{ color: '#F3F4F6' }}
            labelStyle={{ color: '#F3F4F6' }}
          />
          <Bar dataKey="sales">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
