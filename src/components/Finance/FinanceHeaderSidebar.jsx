import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

function FinanceHeaderSidebar() {
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
            <Link to=''>
              <div className='flex items-center gap-3 cursor-pointer'>
                <i className="fa-solid fa-gear w-3"></i>
                <p>Settings</p>
              </div>
            </Link>
            <div className='flex items-center gap-3 cursor-pointer'>
              <i className="fa-solid fa-right-from-bracket w-3"></i>
              <p>Logout</p>
            </div>
          </div>
        </div>
      </header>

      <div className={` max-w-[260px] min-w-[260px] overflow-y-auto z-50 fixed mt-[60px] pt-7 items-center transition-transform duration-300 ease-in-out bg-white ${isSidebarOpen} lg:translate-x-0`} style={{ height: 'calc(100vh - 60px)' }}>
        <div className='flex flex-col items-center mb-5'>
          <div className='w-[70px] h-[70px] rounded-lg shadow-full'>
            <img src="/public/images/me.jpeg" alt="Patient Image" className='rounded-lg max-w-full min-w-full min-h-full max-h-full' />
          </div>
          <div className='text-center space-y-1 mt-3'>
            <p className='font-medium'>Ali Ahmed</p>
            <p className='text-sm'>Financier</p>
          </div>
        </div>

        <div className='flex flex-col gap-2 text-gray-600 mb-3'>
          <div className='pl-7 font-medium'>
            <p>Main</p>
          </div>

          <div className='px-2'>
            <NavLink
              to='/financedashboard'
              end
              className={({ isActive }) => `p-3 rounded-lg text-xl flex items-center gap-2 cursor-pointer ${isActive ? "bg-[#F0F3FB]" : "bg-transparent"} hover:bg-[#F0F3FB]`}>
              <i className="fas fa-columns w-6 text-center"></i>
              <p className='text-lg'>Dashboard</p>
            </NavLink>
          </div>

          <div className='px-2'>
            <NavLink
              to='/financedashboard/consultationinvoices'
              end
              className={({ isActive }) => `p-3 rounded-lg text-xl flex items-center gap-2 cursor-pointer ${isActive ? "bg-[#F0F3FB]" : "bg-transparent"} hover:bg-[#F0F3FB]`}>
              <i className="fas fa-handshake w-6 text-center"></i>
              <p className='text-lg'>Consultation Invoices</p>
            </NavLink>
          </div>


          <div className='px-2'>
            <NavLink to='/financedashboard/medicationinvoices' className={({ isActive }) => `p-3 rounded-lg text-xl flex items-center gap-2 hover:bg-[#F0F3FB] cursor-pointer ${isActive ? 'bg-[#F0F3FB]' : 'bg-transparent'}`}>
              <i className="fa-solid fa-pills w-6 text-center"></i>
              <p className='text-lg'>Medication Invoices</p>
            </NavLink>
          </div>

          <div className='px-2'>
            <NavLink to='/financedashboard/settings' className={({ isActive }) => `p-3 rounded-lg text-xl flex items-center gap-2 hover:bg-[#F0F3FB] cursor-pointer ${isActive ? 'bg-[#F0F3FB]' : 'bg-transparent'}`}>
              <i className="fa-solid fa-gear w-6 text-center"></i>
              <p className='text-lg'>Settings</p>
            </NavLink>
          </div>

          <div className='px-2'>
            <div className='p-3 rounded-lg text-xl flex items-center gap-2 hover:bg-[#F0F3FB] cursor-pointer'>
              <i className="fa-solid fa-right-from-bracket w-6 text-center"></i>
              <p className='text-lg'>Logout</p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default FinanceHeaderSidebar;