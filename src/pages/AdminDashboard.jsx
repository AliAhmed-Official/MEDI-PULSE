import { React } from 'react';
import AdminHeaderSidebar from '../components/Admin/AdminHeaderSidebar';

function AdminDashboard() {
  return (
    <>
      <AdminHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='my-5 mx-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-columns text-lg"></i></p>
        </div>

        <div class="m-3 md:m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-purple-100 rounded-lg p-5 shadow-md">
            <div class="flex items-center">
              <div class="bg-purple-500 text-white rounded-full p-3 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h-2V3a1 1 0 011-1zm0 4a6 6 0 100 12 6 6 0 000-12zM2 10a8 8 0 1115.99.24A8.001 8.001 0 012 10z" /></svg>
              </div>
              <div>
                <h4 class="font-bold text-lg">Total Booked Appointments</h4>
                <p class="text-2xl">650</p>
              </div>
            </div>
            <div class="mt-2">
              <svg class="w-full h-2" fill="none" viewBox="0 0 100 2">
                <path stroke="#6B46C1" d="M0 1h100" stroke-width="2" />
              </svg>
            </div>
          </div>

          <div class="bg-green-100 rounded-lg p-5 shadow-md">
            <div class="flex items-center">
              <div class="bg-green-500 text-white rounded-full p-3 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h-2V3a1 1 0 011-1zm0 4a6 6 0 100 12 6 6 0 000-12zM2 10a8 8 0 1115.99.24A8.001 8.001 0 012 10z" /></svg>
              </div>
              <div>
                <h4 class="font-bold text-lg">Total Completed Appointments</h4>
                <p class="text-2xl">129</p>
              </div>
            </div>
            <div class="mt-2">
              <svg class="w-full h-2" fill="none" viewBox="0 0 100 2">
                <path stroke="#38A169" d="M0 1h100" stroke-width="2" />
              </svg>
            </div>
          </div>

          <div class="bg-orange-100 rounded-lg p-5 shadow-md">
            <div class="flex items-center">
              <div class="bg-orange-500 text-white rounded-full p-3 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h-2V3a1 1 0 011-1zm0 4a6 6 0 100 12 6 6 0 000-12zM2 10a8 8 0 1115.99.24A8.001 8.001 0 012 10z" /></svg>
              </div>
              <div>
                <h4 class="font-bold text-lg">Total Cancelled Appointments</h4>
                <p class="text-2xl">12</p>
              </div>
            </div>
            <div class="mt-2">
              <svg class="w-full h-2" fill="none" viewBox="0 0 100 2">
                <path stroke="#F6AD55" d="M0 1h100" stroke-width="2" />
              </svg>
            </div>
          </div>

          <div class="bg-blue-100 rounded-lg p-5 shadow-md">
            <div class="flex items-center">
              <div class="bg-blue-500 text-white rounded-full p-3 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h-2V3a1 1 0 011-1zm0 4a6 6 0 100 12 6 6 0 000-12zM2 10a8 8 0 1115.99.24A8.001 8.001 0 012 10z" /></svg>
              </div>
              <div>
                <h4 class="font-bold text-lg">Total Doctors Strength</h4>
                <p class="text-2xl">54</p>
              </div>
            </div>
            <div class="mt-2">
              <svg class="w-full h-2" fill="none" viewBox="0 0 100 2">
                <path stroke="#3182CE" d="M0 1h100" stroke-width="2" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AdminDashboard;