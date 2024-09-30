function Footer() {
  return (
    <>
      <footer className="w-full bg-[#E4F6F9] pb-5 md:pb-10 pt-10 md:pt-24 flex md:flex-row flex-col justify-around md:px-10 pl-3 relative mt-auto">

        <div className="rounded-full bg-white w-24 h-24 absolute -top-10 left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center shadow-full overflow-hidden p-3">
          <img src="../public/icon.png" alt="Footer Image" className="object-contain" />
        </div>

        <div className="max-w-80 overflow-hidden">
          <img src="../public/images/logo.png" alt="MEDIPULSE LOGO" className="object-contain h-28 w-40 cursor-pointer relative right-3 bottom-5" />
          <p className="mt-3 text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam vel dolorem eveniet distinctio ut commodi.</p>
          <p className="font-semibold text-md pt-16 hidden md:block">&copy; 2024 MEDI PULSE</p>
        </div>

        <div className="text-md md:mx-28 md:mt-0 mt-5">
          <ul className="md:space-y-8 space-y-3">
            <li><span className="font-semibold text-md">Links</span></li>
            <li className="cursor-pointer hover:text-[#0CC1E0]"><span>Home</span></li>
            <li className="cursor-pointer hover:text-[#0CC1E0]"><span>Doctors</span></li>
            <li className="cursor-pointer hover:text-[#0CC1E0]"><span>Contact</span></li>
            <li className="cursor-pointer hover:text-[#0CC1E0]"><span>About</span></li>
          </ul>
        </div>

        <div className="text-md max-w-[400px] mt-5 md:mt-0">
          <ul>
            <li><p className="font-semibold text-md">Address</p></li>
            <li><p className="hover:text-[#0CC1E0] cursor-pointer">Serena Tower Flat#BM13 Block B Buffer Zone Sector 15-A/1, Karachi</p></li>
            <li className="mt-2"><p className="font-semibold text-md">For more infomation email us at:</p></li>
            <li><p className="hover:text-[#0CC1E0] cursor-pointer">aliahmedchamp@gmail.com</p></li>
            <li className="mt-2"><p className="font-semibold text-md">Social Links</p></li>
            <li className="flex items-center space-x-5 mt-4">
              <i className="fa-brands fa-instagram fa-md hover:text-[#0BC1E0] cursor-pointer"></i>
              <i className="fa-brands fa-whatsapp fa-md hover:text-[#0BC1E0] cursor-pointer"></i>
              <i className="fa-brands fa-facebook-f fa-md hover:text-[#0BC1E0] cursor-pointer"></i>
            </li>
          </ul>
        </div>

        <div className="max-w-80 md:hidden mt-8 text-center">
          <p className="font-semibold text-md">&copy; 2024 MEDI PULSE</p>
        </div>

      </footer >
    </>
  )
}

export default Footer;