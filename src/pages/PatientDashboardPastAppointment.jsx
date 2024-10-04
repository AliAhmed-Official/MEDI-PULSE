import { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

function PatientDashboardPastAppointment() {
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
      <DashboardHeader />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='flex flex-col my-5 bg-[#F0F3FB] '>
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
                    <th className="py-2 px-4 border border-gray-300">Doctor Image</th>
                    <th className="py-2 px-4 border border-gray-300">Doctor Name</th>
                    <th className="py-2 px-4 border border-gray-300">Appointment Date</th>
                    <th className="py-2 px-4 border border-gray-300">Disease/Condition</th>
                    <th className="py-2 px-4 border border-gray-300 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border border-gray-100 flex justify-center">
                      <div className='w-10 h-10 rounded-lg'>
                        <img src="/public/images/me.jpeg" alt="" className='max-w-full max-h-full min-w-full min-h-full rounded-lg' />
                      </div>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">Dr. Lubaid Ahmed</td>
                    <td className="py-2 px-4 border border-gray-300">4/10/2024</td>
                    <td className="py-2 px-4 border border-gray-300">Fever</td>
                    <td className="py-2 px-4 border text-center border-gray-300"><i className="fa-solid fa-trash-can text-red-600 cursor-pointer"></i></td>
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

export default PatientDashboardPastAppointment;