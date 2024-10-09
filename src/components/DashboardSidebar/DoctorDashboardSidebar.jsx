import React, { useState } from 'react';

function DoctorDashboardSidebar({ sidebarOpen }) {
  return (
    <div className={` max-w-[260px] min-w-[260px] overflow-y-auto z-40 fixed mt-[60px] pt-7 items-center transition-transform duration-300 ease-in-out bg-white ${sidebarOpen} lg:translate-x-0`} style={{ height: 'calc(100vh - 60px)' }}>
      <div className='flex flex-col items-center mb-5'>
        <div className='w-[70px] h-[70px] rounded-lg shadow-full'>
          <img src="/public/images/khadeejah.jpg" alt="Patient Image" className='rounded-lg max-w-full min-w-full min-h-full max-h-full' />
        </div>
        <div className='text-center space-y-1 mt-3'>
          <p className='font-medium'>Khadeejah Ashraf</p>
          <p className='text-sm'>Doctor</p>
        </div>
      </div>

      <div className='flex flex-col gap-2 text-gray-600 mb-3'>
        <div className='pl-7 font-medium'>
          <p>Main</p>
        </div>

        <div className='px-2'>
          <div className='p-3 rounded-lg text-xl flex items-center gap-2 hover:bg-[#F0F3FB] bg-[#F0F3FB] cursor-pointer'>
            <i className="fas fa-columns w-6 text-center"></i>
            <p className='text-lg'>Dashboard</p>
          </div>
        </div>

        <div className='px-2'>
          <div className='p-3 rounded-lg text-xl flex items-center gap-2 hover:bg-[#F0F3FB] cursor-pointer'>
            <i className="fa-solid fa-clipboard-list w-6 text-center"></i>
            <p className='text-lg'>Appointments</p>
          </div>
        </div>

        <div className='px-2'>
          <div className='p-3 rounded-lg text-xl flex items-center gap-2 hover:bg-[#F0F3FB] cursor-pointer'>
            <i className="fa-solid fa-gear w-6 text-center"></i>
            <p className='text-lg'>Settings</p>
          </div>
        </div>

        <div className='px-2'>
          <div className='p-3 rounded-lg text-xl flex items-center gap-2 hover:bg-[#F0F3FB] cursor-pointer'>
            <i className="fa-solid fa-right-from-bracket w-6 text-center"></i>
            <p className='text-lg'>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboardSidebar;