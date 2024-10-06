import React from 'react';
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

function PatientDashboard() {
  return (
    <>
      <DashboardHeader />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] lg:h-screen'>
        <div className='my-5 mx-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-columns text-lg"></i></p>
        </div>

        <div className='flex flex-col bg-[#F0F3FB] my-5 gap-5'>
          <div className='bg-white mx-5 rounded-md p-5 pb-10 text-gray-500 flex flex-col md:flex-row md:items-center gap-5'>
            <img src="/public/images/patient welcome.png" alt="Patient Welcome" className='md:max-w-[297px] md:max-h-[148px]' />
            <div className='space-y-2'>
              <p className='font-bold'>Welcome Back</p>
              <p className='text-2xl font-bold text-[#0CC1E0]'>Ali Ahmed!</p>
              <p className='text-gray-600'>We would like to take this opportunity to welcome you to our practice and to thank you for choosing our physicians to participate in your healthcare. We look forward to providing you with personalized, comprehensive health care focusing on wellness and prevention.</p>
            </div>
          </div>

          <div className='flex flex-col gap-5 md:grid md:grid-cols-2 md:justify-center lg:grid-cols-4 mx-5 bg-[#F0F3FB]'>
            <div className='bg-white p-5 rounded-md'>
              <div className='flex justify-between'>
                <img src="/public/images/blood-pressure.png" alt="Blood Pressure Image" className='w-[50px] h-[50px]' />
                <div className='space-y-4'>
                  <p className='font-medium'>Blood Pressure</p>
                  <p className='font-bold text-xl text-[#4CAF50] text-end'>110/70</p>
                </div>
              </div>
              <div className='flex items-center p-2 gap-2 mt-5'>
                <i className="fa-solid fa-arrow-trend-up text-[#4CAF50] w-6"></i>
                <p className='text-[13px] lg:text-xs'>10% Higher Than Last Reading</p>
              </div>
            </div>

            <div className='bg-white p-5 rounded-md'>
              <div className='flex justify-between'>
                <img src="/public/images/heart-rate.png" alt="Blood Pressure Image" className='w-[50px] h-[50px]' />
                <div className='space-y-4'>
                  <p className='font-medium'>Heart Rate</p>
                  <p className='font-bold text-xl text-[#4CAF50] text-end'>80/70</p>
                </div>
              </div>
              <div className='flex items-center p-2 gap-2 mt-5'>
                <i className="fa-solid fa-arrow-trend-down text-[#FD7E14] w-6"></i>
                <p className='text-[13px] lg:text-xs'>10% Higher Than Last Reading</p>
              </div>
            </div>

            <div className='bg-white p-5 rounded-md'>
              <div className='flex justify-between'>
                <img src="/public/images/heart-rate.png" alt="Blood Pressure Image" className='w-[50px] h-[50px]' />
                <div className='space-y-4'>
                  <p className='font-medium'>Heart Rate</p>
                  <p className='font-bold text-xl text-[#4CAF50] text-end'>80/70</p>
                </div>
              </div>
              <div className='flex items-center p-2 gap-2 mt-5'>
                <i className="fa-solid fa-arrow-trend-down text-[#FD7E14] w-6"></i>
                <p className='text-[13px] lg:text-xs'>10% Higher Than Last Reading</p>
              </div>
            </div>

            <div className='bg-white p-5 rounded-md'>
              <div className='flex justify-between'>
                <img src="/public/images/heart-rate.png" alt="Blood Pressure Image" className='w-[50px] h-[50px]' />
                <div className='space-y-4'>
                  <p className='font-medium'>Heart Rate</p>
                  <p className='font-bold text-xl text-[#4CAF50] text-end'>80/70</p>
                </div>
              </div>
              <div className='flex items-center p-2 gap-2 mt-5'>
                <i className="fa-solid fa-arrow-trend-down text-[#FD7E14] w-6"></i>
                <p className='text-[13px] lg:text-xs'>10% Higher Than Last Reading</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PatientDashboard;