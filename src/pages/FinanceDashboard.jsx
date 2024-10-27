import React from 'react';
import FinanceHeaderSidebar from '../components/Finance/FinanceHeaderSidebar';

function FinanceDashboard() {
  return (
    <>
      <FinanceHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='my-5 mx-3 md:mx-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-columns text-lg"></i></p>
        </div>
      </main>
    </>
  )
}

export default FinanceDashboard;