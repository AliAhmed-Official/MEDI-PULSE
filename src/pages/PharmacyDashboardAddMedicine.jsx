import React, { useState } from 'react';
import PharmacyHeaderSidebar from '../components/Pharmacy/PharmacyHeaderSidebar';

function PharmacyDashboardAddMedicine() {
  return (
    <>
      <PharmacyHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Add Medicine</p>
        </div>

        <div className='flex flex-col my-5 bg-[#F0F3FB]'>
          <div className='bg-white text-gray-500 rounded-md mx-3 p-3 flex flex-col gap-8 py-5'>
            <p className='font-semibold text-lg'>Add Medicine Details</p>
            <form className='space-y-8'>

              <div className='flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-3'>
                <input type="text" placeholder='NDC*' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                <input type="text" placeholder='Medicine Name*' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                <input type="text" placeholder='Age*' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                <select name="" className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none'>
                  <option value="">Category*</option>
                </select>
                <select name="" className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none'>
                  <option value="">Company*</option>
                </select>
                <input type="text" placeholder='Price*' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                <input type="text" placeholder='Stock*' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
              </div>

              <p className='font-semibold text-lg'>Add Purchasing & Expiry Dates</p>
              <div className='flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-3'>
                <div className='flex flex-col'>
                  <label htmlFor="date" className="text-gray-600 text-sm">Purchasing Date*</label>
                  <input type="date" className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="date" className="text-gray-600 text-sm">Expiry Date*</label>
                  <input type="date" className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                </div>
              </div>

              <div className='md:flex md:justify-center gap-2'>
                <button className='w-full md:w-24 p-3 bg-[#0CC1E0] text-white font-semibold rounded-2xl hover:bg-gray-400 hover:text-black hover:shadow-none'>Save</button>
                <button className='w-full md:w-24 p-3 bg-[#BF2C2C] text-white font-semibold rounded-2xl hover:bg-gray-400 hover:text-black hover:shadow-none'>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default PharmacyDashboardAddMedicine;