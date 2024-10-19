import { Link } from "react-router-dom";

function Header() {
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

          <div className="hidden lg:block">
            <ul className="flex space-x-10">
              <li className="cursor-pointer hover:text-[#0BC1E0] font-semibold">Home</li>
              <li className="cursor-pointer hover:text-[#0BC1E0] font-semibold">Doctors</li>
              <li className="cursor-pointer hover:text-[#0BC1E0] font-semibold">Contact</li>
              <li className="cursor-pointer hover:text-[#0BC1E0] font-semibold">About</li>
            </ul>
          </div>

          <div className="bg-[#0BC1E0] rounded p-3 text-white font-semibold cursor-pointer hover:text-[#0BC1E0] hover:bg-white hover:shadow-full px-6 hidden lg:block shadow-[#0CC1E0] shine-effect">
            <p>Get Appointment</p>
          </div>

          <div className="lg:hidden text-[#0BC1E0]">
            <i class="fa-solid fa-bars fa-xl"></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;