import { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

function PatientDashboardPrescription() {
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

        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Prescriptions</p>
        </div>

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