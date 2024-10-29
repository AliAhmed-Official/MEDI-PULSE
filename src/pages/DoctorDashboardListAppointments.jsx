import { React, useState } from 'react';
import DoctorHeaderSidebar from '../components/Doctor/DoctorHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';

function DoctorDashboardListAppointments() {
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
      <DoctorHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Patient Appointments</p>
        </div>

        <div className='flex flex-col my-5 bg-[#F0F3FB] '>
          <div className='bg-white text-gray-500 rounded-md mx-3 p-3 flex flex-col gap-6 py-5'>
            <div className='flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0'>
              <form className='md:flex md:justify-start flex-grow'>
                <div className="relative md:w-2/3">
                  <div className={`bg-white flex items-center border-2 md:rounded-r-none md:border-r-0 rounded-lg ${focusState ? "border-[#0CC1E0]" : "border-gray-300"}`}>
                    <i className={`fa-solid fa-user-injured ml-3 ${focusState ? "text-[#0CC1E0]" : "text-gray-400"}`}></i>
                    <input
                      type="text"
                      id="search-input"
                      className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder=" "
                    />
                    <label htmlFor="search-input" className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState ? "-top-3 text-[#0CC1E0] text-sm bg-white px-1" : "text-gray-400"}`}>
                      Search
                    </label>
                  </div>
                </div>
                <button type="submit" className='hidden md:block rounded-r-lg p-2 px-3 bg-[#0CC1E0] text-white'>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>

              <form className='md:w-48'>
                <div className="relative">
                  <select
                    id="appointment-type"
                    className="block w-full pl-3 pr-8 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-[#0CC1E0] focus:ring focus:ring-[#0CC1E0] focus:ring-opacity-50 focus:outline-none"
                  >
                    <option value="clinic">In Clinic</option>
                    <option value="online">Online</option>
                  </select>
                </div>
              </form>
            </div>

            <div className='overflow-x-auto' id='pastappointment'>
              <table className="min-w-full border-collapse border border-gray-300 text-center">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border border-gray-300">Patient</th>
                    <th className="py-2 px-4 border border-gray-300">Gender</th>
                    <th className="py-2 px-4 border border-gray-300">Phone</th>
                    <th className="py-2 px-4 border border-gray-300">Appointment Time</th>
                    <th className="py-2 px-4 border border-gray-300">Appointment Type</th>
                    <th className="py-2 px-4 border border-gray-300">Last Visit Date</th>
                    <th className="py-2 px-4 border border-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td className="py-2 px-4 border border-gray-300">
                      <div className='flex flex-col text-sm md:text-base gap-1 items-center'>
                        <img src="/public/images/me.jpeg" alt="Patient Name" className='w-12 h-12 rounded-full' />
                        <p>Ali Ahmed</p>
                      </div>
                    </td>
                    <td className="py-2 px-4 border border-gray-300"><p className='p-1 rounded-lg font-semibold bg-[#C7D9D4] text-[#4BA650]'>Male</p></td>
                    <td className="py-2 px-4 border border-gray-300">
                      <div className='flex items-center justify-center gap-2'>
                        <i className="fa-solid fa-phone text-[#4BA650]"></i>
                        <p>03222506206</p>
                      </div>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <div className='flex items-center justify-center gap-2'>
                        <i className="fa-regular fa-clock text-[#6B42B8] font-medium"></i>
                        <p>09:00</p>
                      </div>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <p>In Clinic</p>
                    </td>
                    <td className="py-2 px-4 border text-center border-gray-300">
                      <p>09/01/2024</p>
                    </td>
                    <td className="py-2 px-4 border text-center border-gray-300">
                      <i className="fa-solid fa-check text-xl text-[#4BA650]"></i>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td className="py-2 px-4 border border-gray-300">
                      <div className='flex flex-col text-sm md:text-base gap-1 items-center'>
                        <img src="/public/images/alishbah.jpg" alt="Patient Name" className='w-12 h-12 rounded-full' />
                        <p>Alishbah Shapater</p>
                      </div>
                    </td>
                    <td className="py-2 px-4 border border-gray-300"><p className='p-1 rounded-lg font-semibold bg-[#D4CFE5] text-[#6B42B8]'>Female</p></td>
                    <td className="py-2 px-4 border border-gray-300">
                      <div className='flex items-center justify-center gap-2'>
                        <i className="fa-solid fa-phone text-[#4BA650]"></i>
                        <p>03222506206</p>
                      </div>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <div className='flex items-center justify-center gap-2'>
                        <i className="fa-regular fa-clock text-[#6B42B8] font-medium"></i>
                        <p>09:00</p>
                      </div>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <p>Online</p>
                    </td>
                    <td className="py-2 px-4 border text-center border-gray-300">
                      <p>09/01/2024</p>
                    </td>
                    <td className="py-2 px-4 border text-center border-gray-300">
                      <i className="fa-solid fa-xmark text-xl text-[#e31b1b]"></i>
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

export default DoctorDashboardListAppointments;