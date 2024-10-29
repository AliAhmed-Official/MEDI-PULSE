import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState('translate-x-full');
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => (prev === 'translate-x-full' ? 'translate-x-0' : 'translate-x-full'));
  };
  return (
    <>
      <header className="h-[100px] lg:h-[120px] shadow-md">
        <div className="bg-[#e4f6f9] w-full h-[25px] lg:h-[40px] flex items-center justify-between px-3 lg:px-32 text-[#58595B]">
          <div className="space-x-4 lg:space-x-6">
            <i class="fa-brands fa-instagram fa-sm lg:hidden hover:text-[#0BC1E0] cursor-pointer"></i>
            <i class="fa-brands fa-instagram hidden lg:inline-block hover:text-[#0BC1E0] cursor-pointer"></i>
            <i class="fa-brands fa-whatsapp fa-sm lg:hidden hover:text-[#0BC1E0] cursor-pointer"></i>
            <i class="fa-brands fa-whatsapp hidden lg:inline-block hover:text-[#0BC1E0] cursor-pointer"></i>
            <i class="fa-brands fa-facebook-f fa-sm lg:hidden hover:text-[#0BC1E0] cursor-pointer"></i>
            <i class="fa-brands fa-facebook-f hidden lg:inline-block hover:text-[#0BC1E0] cursor-pointer"></i>
          </div>
          <div className="lg:space-x-2 space-x-1 text-[#58595B] lg:text-[16px] text-[12px]">
            <i class="fa-solid fa-user"></i>
            <Link to='/login' className="cursor-pointer hover:text-[#0BC1E0]">Login</Link>
            <span>/</span>
            <Link to='/signup' className="cursor-pointer hover:text-[#0BC1E0]">Sign up</Link>
          </div>
        </div>

        <nav className="lg:h-[80px] h-[75px] w-full flex items-center justify-between lg:px-28 px-4">
          <div className="h-full cursor-pointer flex items-center">
            <img src="../public/images/logo.png" alt="MEDIPULSE LOGO" className="lg:max-w-full lg:max-h-full max-w-28" />
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-10">
              <li className="cursor-pointer hover:text-[#0BC1E0] font-semibold"><NavLink to='/' className={({ isActive }) => `${isActive ? 'text-[#0cc1e0]' : 'text-black'}`}>Home</NavLink></li>
              <li className="cursor-pointer hover:text-[#0BC1E0] font-semibold"><NavLink to='/doctors' className={({ isActive }) => `${isActive ? 'text-[#0cc1e0]' : 'text-black'}`}>Doctors</NavLink></li>
              <li className="cursor-pointer hover:text-[#0BC1E0] font-semibold"><NavLink to='/contactus' className={({ isActive }) => `${isActive ? 'text-[#0cc1e0]' : 'text-black'}`}>Contact</NavLink></li>

            </ul>
          </div>

          <Link to='/doctors' className="bg-[#0BC1E0] rounded p-3 text-white font-semibold cursor-pointer hover:text-[#0BC1E0] hover:bg-white hover:shadow-full px-6 hidden md:block shadow-[#0CC1E0] shine-effect">
            <p>Get Appointment</p>
          </Link>

          <div className="md:hidden text-[#0BC1E0]">
            <i class="fa-solid fa-bars fa-xl" onClick={toggleSidebar}></i>
          </div>
        </nav>
      </header >

      <div className={`max-w-[260px] min-w-[260px] overflow-y-auto z-50 fixed right-0 top-0 pt-7 h-screen transition-transform duration-300 ease-in-out bg-white ${isSidebarOpen}`}>
        <i className="fa-solid fa-xmark text-3xl absolute top-5 left-3" onClick={toggleSidebar}></i>
        <div className="flex flex-col items-center gap-8 text-gray-600 mb-3 mt-20">
          <Link to='/' className="text-xl">
            Home
          </Link>
          <Link to='/doctors' className="text-xl">
            Doctors
          </Link>
          <Link to='/contactus' className="text-xl">
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header;