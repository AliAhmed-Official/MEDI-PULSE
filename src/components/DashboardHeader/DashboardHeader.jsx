import React, { useState, useEffect, useRef } from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

function DashboardHeader() {
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
      <header className='fixed w-full z-50 bg-white'>
        <nav className={`h-[60px] flex justify-between items-center px-5 ${isMenuOpen ? '' : 'shadow-md'}`}>
          <div className='md:flex md:items-center md:gap-10 lg:relative lg:left-16'>
            <i className="fa-solid fa-bars text-xl cursor-pointer lg:hidden" onClick={toggleSidebar}></i>
            <img src="/public/images/logo.png" alt="Logo" className='w-24 h-full hidden md:block' />
          </div>

          <img src="/public/images/logo.png" alt="Logo" className='w-24 h-full md:hidden' />
          <i className="fa-solid fa-arrow-right-arrow-left fa-rotate-90 text-xl md:hidden" onClick={toggleMenu}></i>

          <div className='hidden md:flex md:items-center md:font-medium md:text-[15px] md:gap-1'>
            <div className='hover:bg-[#EBF2FA] md:p-1 md:px-2 md:rounded-full md:cursor-pointer'>
              <i className="fa-regular fa-bell md:text-xl "></i>
            </div>
            <div className='md:flex md:items-center md:gap-5 md:p-1 md:px-2 hover:bg-[#EBF2FA] md:cursor-pointer md:rounded-3xl' onClick={toggleProfileDropMenu}>
              <p className='text-gray-500'>Ali Ahmed</p>
              <img src="/public/images/me.jpeg" alt="Profile Image" className='md:w-9 md:h-9 md:rounded-full' />
            </div>
          </div>
        </nav>

        <div className={`p-2 pb-0 pt-3 md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
          <div className='flex items-center justify-end font-medium text-[15px] gap-1'>
            <div className='hover:bg-[#EBF2FA] p-1 px-2 rounded-full cursor-pointer'>
              <i className="fa-regular fa-bell text-xl "></i>
            </div>
            <div className='flex items-center gap-5 p-1 px-2 hover:bg-[#EBF2FA] cursor-pointer rounded-3xl' onClick={toggleProfileDropMenu}>
              <p className='text-gray-500'>Ali Ahmed</p>
              <img src="/public/images/me.jpeg" alt="Profile Image" className='w-9 h-9 rounded-full' />
            </div>
          </div>
        </div>

        <div className={`flex justify-end mr-3 ${isprofileDropMenuOpen ? '' : 'hidden'}`}>
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
      <DashboardSidebar sidebarOpen={isSidebarOpen} />
    </>
  )
}

export default DashboardHeader;