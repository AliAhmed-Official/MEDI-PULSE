import { React, useState } from 'react';
import PatientDashboardSidebar from '../components/DashboardSidebar/PatientDashboardSidebar';

function PatientDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isprofileDropMenuOpen, setProfileDropMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState('translate-x-[-100%]');
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setProfileDropMenuOpen(false);
    setIsSidebarOpen('translate-x-[-100%]');
  }
  const toggleProfileDropMenu = () => {
    setProfileDropMenuOpen((prev) => !prev);
  }
  const toggleSidebar = () => {
    if (isMenuOpen == true) return;
    setIsSidebarOpen((prev) => {
      return prev == 'translate-x-[-100%]' ? 'translate-x-0' : 'translate-x-[-100%]';
    });
  }
  return (
    <>
      <header className='fixed w-full z-40 bg-white'>
        <nav className={`h-[60px] flex justify-between items-center px-5 ${isMenuOpen ? '' : 'shadow-md'}`}>
          <div className='md:flex md:items-center md:gap-10 lg:relative lg:left-16'>
            <i className="fa-solid fa-bars text-xl cursor-pointer lg:hidden" onClick={toggleSidebar}></i>
            <img src="/public/images/logo.png" alt="Logo" className='w-24 h-full hidden md:block' />
          </div>

          <img src="/public/images/logo.png" alt="Logo" className='w-24 h-full md:hidden' />
          <i className="fa-solid fa-arrow-right-arrow-left fa-rotate-90 text-xl md:hidden" onClick={toggleMenu}></i>

          <div className='hidden md:flex md:items-center md:font-medium md:text-[15px] md:gap-1'>
            <div class="relative hover:bg-[#EBF2FA] md:p-1 md:px-2 md:rounded-full md:cursor-pointer">
              <i class="fa-regular fa-bell md:text-xl"></i>
              <p class="absolute top-0 right-0 w-4 h-4 text-xs rounded-full bg-red-500 flex items-center justify-center text-white">1</p>
            </div>

            <div className='md:flex md:items-center md:gap-5 md:p-1 md:px-2 hover:bg-[#EBF2FA] md:cursor-pointer md:rounded-3xl' onClick={toggleProfileDropMenu}>
              <p className='text-gray-500'>Ali Ahmed</p>
              <img src="/public/images/me.jpeg" alt="Profile Image" className='md:w-9 md:h-9 md:rounded-full' />
            </div>
          </div>
        </nav>

        <div className={`p-2 pb-0 pt-3 md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
          <div className='flex items-center justify-end font-medium text-[15px] gap-1'>
            <div className='hover:bg-[#EBF2FA] p-1 px-2 rounded-full cursor-pointer relative'>
              <i className="fa-regular fa-bell text-xl"></i>
              <p class="absolute top-0 right-0 w-4 h-4 text-xs rounded-full bg-red-500 flex items-center justify-center text-white">1</p>
            </div>
            <div className='flex items-center gap-5 p-1 px-2 hover:bg-[#EBF2FA] cursor-pointer rounded-3xl' onClick={toggleProfileDropMenu}>
              <p className='text-gray-500'>Ali Ahmed</p>
              <img src="/public/images/me.jpeg" alt="Profile Image" className='w-9 h-9 rounded-full' />
            </div>
          </div>
        </div>

        <div className={`absolute right-3 top-[116px] md:top-[60px] ${isprofileDropMenuOpen ? '' : 'hidden'}`}>
          <div className='bg-[#EFEDF1] w-52 p-3 flex flex-col gap-5'>
            <div className='flex items-center gap-3 cursor-pointer'>
              <i className="fa-solid fa-gear w-3"></i>
              <p>Settings</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer'>
              <i className="fa-solid fa-right-from-bracket w-3"></i>
              <p>Logout</p>
            </div>
          </div>
        </div>

      </header>
      <PatientDashboardSidebar sidebarOpen={isSidebarOpen} />
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