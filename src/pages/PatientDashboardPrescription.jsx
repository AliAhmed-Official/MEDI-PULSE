import { useState } from 'react';
import PatientDashboardSidebar from '../components/DashboardSidebar/PatientDashboardSidebar';

function PatientDashboardPrescription() {
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

  const [focusState, setFocusState] = useState(false);
  const handleFocus = () => {
    setFocusState(true);
  };
  const handleBlur = (e) => {
    if (e.target.value === '') {
      setFocusState(false);
    }
  };
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
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>

        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Prescriptions</p>
        </div>

        <div className='flex flex-col my-5 bg-[#F0F3FB]'>
          <div className='bg-white text-gray-500 rounded-md mx-3 p-3 flex flex-col gap-6 py-5'>
            <div className='md:flex justify-center'>
              <div className="relative md:w-1/3">
                <div className={`bg-white flex items-center border-2 md:rounded-r-none md:border-r-0 rounded-lg ${focusState ? "border-[#0CC1E0]" : "border-gray-300"}`}>
                  <i className={`fa-solid fa-stethoscope  ml-3 ${focusState ? "text-[#0CC1E0]" : "text-gray-400"}`}></i>
                  <input type="text" id="search-input" className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0" onFocus={() => handleFocus()} onBlur={(e) => handleBlur(e)} />
                  <label htmlFor="search-input" className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState ? "-top-3 text-[#0CC1E0] text-sm bg-white px-1" : "text-gray-400"}`}>Doctor Name</label>
                </div>
              </div>
              <button className='hidden md:block rounded-r-lg p-2 px-3 bg-[#0CC1E0] text-white'><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div className='overflow-x-auto' id='pastappointment'>
              <table className="min-w-full border-collapse border border-gray-300 text-center">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border border-gray-300">#PID</th>
                    <th className="py-2 px-16 border border-gray-300">Created by</th>
                    <th className="py-2 px-4 border border-gray-300">Date</th>
                    <th className="py-2 px-4 border border-gray-300">Disease/Condition</th>
                    <th className="py-2 px-12 md:px-4 border border-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border border-gray-300">#A348</td>
                    <td className="py-2 px-4 border border-gray-300">Dr. Lubaid Ahmed</td>
                    <td className="py-2 px-4 border border-gray-300">4/10/2024</td>
                    <td className="py-2 px-4 border border-gray-300">Fever</td>
                    <td className="py-2 px-4 border text-center border-gray-300">
                      <div className='flex justify-evenly text-lg'>
                        <i className="fa-solid fa-cloud-arrow-down text-[#6B42B8] cursor-pointer"></i>
                        <i className="fa-solid fa-eye text-[#4BA650] cursor-pointer"></i>
                        <i className="fa-solid fa-trash-can text-red-600 cursor-pointer"></i>
                      </div>
                    </td>
                  </tr>


                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default PatientDashboardPrescription;