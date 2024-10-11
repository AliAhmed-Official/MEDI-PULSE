import { React, useState } from 'react';
import PharmacyHeaderSidebar from '../components/Pharmacy/PharmacyHeaderSidebar';
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function PharmacyDashboard() {
  const salesData = [
    { sales: 1000, day: 'Mon' },
    { sales: 1200, day: 'Tue' },
    { sales: 800, day: 'Wed' },
    { sales: 1500, day: 'Thu' },
    { sales: 1300, day: 'Fri' },
    { sales: 900, day: 'Sat' },
    { sales: 1100, day: 'Sun' }
  ];
  const medicineData = [
    { category: 'Total Medicines', count: 500 },
    { category: 'Out of Stock', count: 150 },
    { category: 'Expired', count: 100 }
  ];
  const COLORS = ['#0cc1e0', '#00a5df', '#79dcff'];
  return (
    <>
      <PharmacyHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='my-5 mx-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-columns text-lg"></i></p>
        </div>

        <div className='my-5 mx-5 grid grid-cols-1 sm:grid-cols-2 gap-2'>
          <div className={'bg-white rounded-2xl p-3 space-y-3 shadow-lg'}>
            <p className='text-lg text-gray-600 font-semibold'>Weekly Pharmacy Sales</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <XAxis dataKey="day" />
                <YAxis tickFormatter={(value) => `Rs ${value}`} />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#0cc1e0" />
              </BarChart>
            </ResponsiveContainer>

          </div>

          <div className={'bg-white rounded-2xl p-3 space-y-3 shadow-lg'}>
            <p className='text-lg text-gray-600 font-semibold'>Medicines Inventory</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie
                  data={medicineData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percent }) => `${category}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {medicineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </>
  )
}

export default PharmacyDashboard;