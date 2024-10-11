import React, { useState } from 'react';
import PharmacyHeaderSidebar from '../components/Pharmacy/PharmacyHeaderSidebar';

function PharmacyDashboardMedicineList() {
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
          <p className='text-xl md:text-2xl font-semibold'>Medicine List</p>
        </div>

        <div className='flex flex-col my-5 bg-[#F0F3FB]'>
          <div className='bg-white text-gray-500 rounded-md mx-3 p-3 flex flex-col gap-6 py-5'>
            <div className='flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0'>
              <form className='md:flex md:justify-start flex-grow'>
                <div className="relative md:w-2/3">
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
                      Search Medicine
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
                    <option value="clinic">Category</option>
                    <option value="clinic">Tablet</option>
                    <option value="online">Syrup</option>
                  </select>
                </div>
              </form>

              <form className='md:w-48'>
                <div className="relative">
                  <select
                    id="appointment-type"
                    className="block w-full pl-3 pr-8 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-[#0CC1E0] focus:ring focus:ring-[#0CC1E0] focus:ring-opacity-50 focus:outline-none"
                  >
                    <option value="clinic">Company</option>
                    <option value="online">3M</option>
                    <option value="online">Darmacos</option>
                  </select>
                </div>
              </form>
            </div>

            <div className='overflow-x-auto' id='pastappointment'>
              <table className="min-w-full border-collapse border border-gray-300 text-center text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border border-gray-300">NDC</th>
                    <th className="py-2 px-16 border border-gray-300">Medicine Name</th>
                    <th className="py-2 px-4 border border-gray-300">Category</th>
                    <th className="py-2 px-4 border border-gray-300">Company</th>
                    <th className="py-2 px-4 border border-gray-300">Purchase Date</th>
                    <th className="py-2 px-4 border border-gray-300">Price</th>
                    <th className="py-2 px-4 border border-gray-300">Expiry Date</th>
                    <th className="py-2 px-4 border border-gray-300">Stock</th>
                    <th className="py-2 px-12 md:px-4 border border-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td className="py-2 px-4 border border-gray-300">0777-3105-02</td>
                    <td className="py-2 px-4 border border-gray-300 overflow-hidden text-ellipsis max-w-[200px]">Augmentin</td>
                    <td className="py-2 px-4 border border-gray-300">Tablet</td>
                    <td className="py-2 px-4 border border-gray-300 overflow-hidden text-ellipsis max-w-[200px]">GLAXOSMITHKLINE</td>
                    <td className="py-2 px-4 border text-center border-gray-300">4/10/2024</td>
                    <td className="py-2 px-4 border border-gray-300">2220</td>
                    <td className="py-2 px-4 border border-gray-300">12/10/2025</td>
                    <td className="py-2 px-4 border border-gray-300">250</td>
                    <td className="py-2 px-4 border border-gray-300">
                      <div className='flex justify-evenly text-lg'>
                        <i className="fa-solid fa-pen-to-square text-[#0cc1e0] cursor-pointer" onClick={toggleOverlay}></i>
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

      {isOverlayVisible ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-2 md:mx-0 md:max-w-2xl w-full flex flex-col gap-3 h-[450px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className='flex justify-end items-center'>
              <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-xl" onClick={toggleOverlay}></i>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <div className=''>
                <label htmlFor="" className='text-xs'>NDC:</label>
                <input type="text" name="" id="" className='p-2 rounded-xl border-2 w-full' placeholder='NDC' />
              </div>
              <div className=''>
                <label htmlFor="" className='text-xs'>Medicine Name:</label>
                <input type="text" name="" id="" className='p-2 rounded-xl border-2 w-full' placeholder='Medicine Name' />
              </div>
              <div className=''>
                <label htmlFor="" className='text-xs'>Category Name:</label>
                <select name="" id="" className='p-2 rounded-xl border-2 w-full '>
                  <option value="">Category</option>
                </select>
              </div>
              <div className=''>
                <label htmlFor="" className='text-xs'>Company Name:</label>
                <select name="" id="" className='p-2 rounded-xl border-2 w-full '>
                  <option value="">Company</option>
                </select>
              </div>
              <div className=''>
                <label htmlFor="" className='text-xs'>Purchase Date:</label>
                <input type="date" name="" id="" className='p-2 rounded-xl border-2 w-full' />
              </div>
              <div className=''>
                <label htmlFor="" className='text-xs'>Expiry Date:</label>
                <input type="date" name="" id="" className='p-2 rounded-xl border-2 w-full' />
              </div>
              <div className=''>
                <label htmlFor="" className='text-xs'>Price:</label>
                <input type="text" name="" id="" className='p-2 rounded-xl border-2 w-full' placeholder='Price' />
              </div>
              <div className=''>
                <label htmlFor="" className='text-xs'>Stock:</label>
                <input type="text" name="" id="" className='p-2 rounded-xl border-2 w-full' placeholder='Stock' />
              </div>
            </div>

            <div className='mt-3'>
              <button className='py-3 px-8 rounded-3xl bg-[#1469C0] text-white font-semibold'>Save</button>
            </div>

          </div>
        </div>
        : null}
    </>
  )
}

export default PharmacyDashboardMedicineList;