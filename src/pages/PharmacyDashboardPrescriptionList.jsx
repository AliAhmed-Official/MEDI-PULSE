import React, { useState } from 'react';
import PharmacyHeaderSidebar from '../components/Pharmacy/PharmacyHeaderSidebar';
import { Link } from 'react-router-dom';

function PharmacyDashboardPrescriptionList() {
  const [focusState, setFocusState] = useState(false);
  const handleFocus = () => {
    setFocusState(true);
  };
  const handleBlur = (e) => {
    if (e.target.value === '') {
      setFocusState(false);
    }
  };
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };
  return (
    <>
      <PharmacyHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Prescription List</p>
        </div>

        <div className='flex flex-col my-5 bg-[#F0F3FB]'>
          <div className='bg-white text-gray-500 rounded-md mx-3 p-3 flex flex-col gap-6 py-5'>

            <div className='flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0'>
              <form className='md:flex md:justify-center md:w-full'>
                <div className="relative md:w-1/3">
                  <div className={`bg-white flex items-center border-2 md:rounded-r-none md:border-r-0 rounded-lg ${focusState ? "border-[#0CC1E0]" : "border-gray-300"}`}>
                    <i className={`fa-solid fa-pills ml-3 ${focusState ? "text-[#0CC1E0]" : "text-gray-400"}`}></i>
                    <input
                      type="text"
                      id="search-input"
                      className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder=" "
                    />
                    <label htmlFor="search-input" className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState ? "-top-3 text-[#0CC1E0] text-sm bg-white px-1" : "text-gray-400"}`}>
                      Search Prescription
                    </label>
                  </div>
                </div>
                <button type="submit" className='hidden md:block rounded-r-lg p-2 px-3 bg-[#0CC1E0] text-white'>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <div className='overflow-x-auto' id='pastappointment'>
              <table className="min-w-full border-collapse border border-gray-300 text-center text-sm">
                <thead>
                  <tr className="bg-gray-200">

                    <th className="py-2 px-16 border border-gray-300">Doctor ID</th>
                    <th className="py-2 px-16 border border-gray-300">Doctor Name</th>
                    <th className="py-2 px-4 border border-gray-300">Patient Name</th>
                    <th className="py-2 px-4 border border-gray-300">Date</th>
                    <th className="py-2 px-4 border border-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100 cursor-pointer" onClick={toggleOverlay}>

                    <td className="py-2 px-4 border border-gray-300 overflow-hidden text-ellipsis max-w-[200px]">Augmentin</td>
                    <td className="py-2 px-4 border border-gray-300">Tablet</td>
                    <td className="py-2 px-4 border border-gray-300 overflow-hidden text-ellipsis max-w-[200px]">GLAXOSMITHKLINE</td>
                    <td className="py-2 px-4 border text-center border-gray-300">4/10/2024</td>
                    <td className="py-2 px-4 border text-center border-gray-300">
                      <i className="fa-solid fa-circle-check text-lg text-green-500"></i>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>

      {isOverlayVisible ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-2 md:mx-0 md:max-w-2xl w-full flex flex-col gap-3 h-[600px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>

            <div className='flex justify-between items-center'>
              <img src="/public/images/logo.png" alt="Logo" className='w-16 h-12 lg:w-24 lg:h-16' />
              <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-xl" onClick={toggleOverlay}></i>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg lg:text-2xl p-1 text-center bg-slate-300'>Patient Details</p>
              <div className='flex items-center gap-2'>
                <img src="/public/images/me.jpeg" alt="Patient Image" className='w-12 h-12 rounded-full' />
                <div className='flex flex-col text-xs lg:text-sm'>
                  <p><span className='font-medium'>Patient Name:</span> Ali Ahmed</p>
                  <p><span className='font-medium'>Age:</span> 22</p>
                  <p><span className='font-medium'>Gender:</span> M</p>
                  <p><span className='font-medium'>Contact:</span> 03222506206</p>
                </div>
              </div>

            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg lg:text-2xl p-1 text-center bg-slate-300'>Prescription Details</p>
              <div className='flex items-center gap-2'>
                <i className="fa-solid fa-file-medical w-12 text-4xl text-center text-[#0cc1e0]"></i>
                <div className='flex flex-col text-xs lg:text-sm'>
                  <p><span className='font-medium'>Doctor ID:</span> 1232</p>
                  <p><span className='font-medium'>Doctor Name:</span> Dr. Khadeejah Ashraf</p>
                  <p><span className='font-medium'>Date of Prescription:</span> 10/10/2024</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg lg:text-2xl p-1 text-center bg-slate-300'>Medicines Details</p>
              <div className='flex justify-between border-b-2 pb-2'>
                <div className='text-xs lg:text-sm'>
                  <p><span className='font-medium'>Medicine Name:</span> Augmentin</p>
                  <p><span className='font-medium'>Dosage:</span> 250 mg</p>
                  <p><span className='font-medium'>Frequency:</span> once daily</p>
                  <p><span className='font-medium'>Duration:</span> 2 weeks</p>
                  <p><span className='font-medium'>Note:</span> Take with milk</p>
                </div>

                <div className='text-green-500 flex items-center gap-2'>
                  <i className="fa-solid fa-circle-check text-2xl"></i>
                  <p>Available</p>
                </div>
              </div>

              <div className='flex justify-between border-b-2 pb-2'>
                <div className='text-xs lg:text-sm'>
                  <p><span className='font-medium'>Medicine Name:</span> Augmentin</p>
                  <p><span className='font-medium'>Dosage:</span> 250 mg</p>
                  <p><span className='font-medium'>Frequency:</span> once daily</p>
                  <p><span className='font-medium'>Duration:</span> 2 weeks</p>
                  <p><span className='font-medium'>Note:</span> Take with milk</p>
                </div>

                <div className='text-red-500 flex items-center gap-2'>
                  <i className="fa-solid fa-circle-xmark text-2xl"></i>
                  <p>Unavailable</p>
                </div>
              </div>
            </div>

            <div className='flex justify-center gap-4 items-center'>
              <i className="fa-solid fa-print text-3xl text-red-500 cursor-pointer"></i>
              <Link to='/pharmacy/pharmacycart'>
                <i className="fa-solid fa-cart-shopping text-3xl cursor-pointer text-[#0cc1e0]"></i>
              </Link>
            </div>

          </div>
        </div>
        : null}
    </>
  )
}

export default PharmacyDashboardPrescriptionList;