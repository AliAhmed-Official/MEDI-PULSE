import React from 'react';

function DashboardSetting() {
  return (
    <section className='flex flex-col flex-grow mx-4 w-fit mt-[60px]'>
      <div className='flex space-x-5 lg:text-xl text-sm items-center mt-5 text-gray-400'>
        <div className='space-x-2 flex items-center'>
          <span className='font-medium'>Doctor Dashboard</span>
          <i className="fa-solid fa-house"></i>
        </div>
        <i className="fa-solid fa-chevron-right text-center text-sm"></i>
        <div className='mt-5s space-x-2  flex items-center'>
          <span className='font-medium'>Settings</span>
          <i className="fa-solid fa-gear"></i>
        </div>
      </div>

      <div className='mt-10 rounded-md bg-white shadow-full lg:h-2/3'>
        <p className='rounded-t-md py-2 px-3 text-gray-600 text-lg font-medium'>Security Settings</p>

        <div className='mt-5 py-2 px-3'>
          <form action="#" className='flex flex-col space-y-3'>
            <input type="text" placeholder='Username' className='flex-grow p-5 text-lg rounded-md border-2 border-gray-300 border-solid appearance-none focus:outline-[#0CC1E0]' />
            <input type="password" placeholder='Current Password' className='flex-grow p-5 text-lg rounded-md border-2 border-gray-300 border-solid appearance-none focus:outline-[#0CC1E0]' />
            <input type="password" placeholder='New Password' className='flex-grow p-5 text-lg rounded-md border-2 border-gray-300 border-solid appearance-none focus:outline-[#0CC1E0]' />
            <button className='rounded-full bg-[#0CC1E0] text-white appearance-none focus:outline-[#0CC1E0] w-20 min-h-10 hover:bg-white hover:text-black hover:shadow-full border-none'>Save</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DashboardSetting;