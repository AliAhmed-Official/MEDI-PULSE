import React from 'react';
import PharmacyHeaderSidebar from '../components/Pharmacy/PharmacyHeaderSidebar';

function PharmacyDashboardSettings() {
  return (
    <>
      <PharmacyHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Settings</p>
        </div>

        <div className='flex flex-col my-5 bg-[#F0F3FB]'>
          <div className='bg-white text-gray-500 rounded-md mx-3 p-3 flex flex-col gap-8 py-5'>
            <form className='space-y-8'>
              <p className='font-semibold text-lg'>Security Settings</p>
              <div className='flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-3'>
                <input type="password" placeholder='Current Password' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                <input type="password" placeholder='New Password' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                <input type="password" placeholder='Confirm Password' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
              </div>

              <div className='md:flex md:justify-center'>
                <button className='w-full md:w-1/6 p-3 bg-[#0CC1E0] shadow-[#0CC1E0] text-white font-semibold rounded-3xl hover:bg-gray-400 hover:text-black hover:shadow-none'>Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default PharmacyDashboardSettings;