import React, { useState, useRef } from 'react';
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

function PatientDashboardBookAppointment() {
  const [files, setFiles] = useState([{ file: null }]);
  const addRow = (e) => {
    e.preventDefault();
    setFiles([...files, { file: null }]);
  };
  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index].file = event.target.files[0];
    setFiles(newFiles);
  };
  const sliderRef = useRef(null);
  const cardWidth = 96 + 12;
  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -(cardWidth * 2),
        behavior: 'smooth',
      });
    }
  };
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: cardWidth * 2,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <DashboardHeader />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] lg:h-screen'>
        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Book Appointment</p>
        </div>

        <div className='flex flex-col my-5 bg-[#F0F3FB]'>
          <div className='bg-white text-gray-500 rounded-md mx-3 p-3 flex flex-col gap-8 py-5'>
            <p className='font-semibold text-lg'>Patient Details</p>
            <form className='space-y-8'>

              <div className='flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-3'>
                <input type="text" placeholder='First Name*' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                <input type="text" placeholder='Last Name*' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                <input type="text" placeholder='Age*' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
                <select name="" className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none'>
                  <option value="">Gender*</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Other</option>
                </select>
                <input type="text" placeholder='Phone Number*' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' />
              </div>

              <p className='font-semibold text-lg'>Fitbit Health Metrices (Optional)</p>
              <div className='flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-3'>
                <input type="text" placeholder='Heart Rate' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
                <input type="text" placeholder='Breath Rate' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
                <input type="text" placeholder='ECG' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
                <input type="text" placeholder='Skin Temperature' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
                <input type="text" placeholder='Blood Pressure' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
              </div>

              <p className='font-semibold text-lg'>Appointment Details</p>
              <div className='flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-3'>
                <select name="" className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none'>
                  <option value="">Select Specialist*</option>
                </select>
                <select name="" className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none'>
                  <option value="">Select Doctor*</option>
                </select>
              </div>

              <div className='flex flex-col gap-6'>
                <div>
                  <p className='font-semibold text-sm mb-2'>Available Dates*</p>
                  <div className='flex gap-3 overflow-x-auto md:justify-between availabledates'>

                    <div className='hidden md:flex md:text-lg md:w-16 md:items-center md:justify-center'><i className="fa-solid fa-chevron-left cursor-pointer" onClick={prevSlide}></i></div>

                    <div className='flex gap-3 md:overflow-x-auto availabledates' ref={sliderRef}>
                      <div className='flex flex-col rounded-xl border-2 border-[#0CC1E0] bg-[#e4f6f9] gap-6 items-center w-24 py-2 flex-shrink-0'>
                        <p>Oct</p>
                        <p>02</p>
                      </div>
                      <div className='flex flex-col rounded-xl border-2 gap-6 items-center w-24 py-2 flex-shrink-0'>
                        <p>Oct</p>
                        <p>02</p>
                      </div>
                      <div className='flex flex-col rounded-xl border-2 gap-6 items-center w-24 py-2 flex-shrink-0'>
                        <p>Oct</p>
                        <p>02</p>
                      </div>
                      <div className='flex flex-col rounded-xl border-2 gap-6 items-center w-24 py-2 flex-shrink-0'>
                        <p>Oct</p>
                        <p>02</p>
                      </div>
                      <div className='flex flex-col rounded-xl border-2 gap-6 items-center w-24 py-2 flex-shrink-0'>
                        <p>Oct</p>
                        <p>02</p>
                      </div>
                      <div className='flex flex-col rounded-xl border-2 gap-6 items-center w-24 py-2 flex-shrink-0'>
                        <p>Oct</p>
                        <p>02</p>
                      </div>
                      <div className='flex flex-col rounded-xl border-2 gap-6 items-center w-24 py-2 flex-shrink-0'>
                        <p>Oct</p>
                        <p>02</p>
                      </div>
                      <div className='flex flex-col rounded-xl border-2 gap-6 items-center w-24 py-2 flex-shrink-0'>
                        <p>Oct</p>
                        <p>02</p>
                      </div>
                      <div className='flex flex-col rounded-xl border-2 gap-6 items-center w-24 py-2 flex-shrink-0'>
                        <p>Oct</p>
                        <p>02</p>
                      </div>
                    </div>

                    <div className='hidden md:flex md:text-lg md:w-16 md:items-center md:justify-center' onClick={nextSlide}><i className="fa-solid fa-chevron-right cursor-pointer"></i></div>

                  </div>
                </div>

                <div>
                  <p className='font-semibold text-sm'>Available Slots*</p>
                  <div className='grid grid-cols-3 text-sm md:flex md:flex-wrap'>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0] bg-[#e4f6f9]'>01:15 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:35 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:15 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:35 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                  </div>
                </div>

                <textarea type="text" rows="3" placeholder='Note' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none md:hidden'></textarea>

                <div className='md:flex md:justify-center'>
                  <div className='flex flex-col border-2 border-dashed p-2 md:w-1/2'>
                    <label htmlFor="file-upload" className='mb-2'>Upload a Test Report if any:</label>
                    {files.map((item, index) => (
                      <div className='flex flex-col file-input-row' key={index}>
                        <input
                          type="file"
                          className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none'
                          onChange={(e) => handleFileChange(index, e)}
                        />
                        {item.file && <p>Selected file: {item.file.name}</p>} {/* Display file name */}
                      </div>
                    ))}
                    <div className='flex justify-center'>
                      <button onClick={addRow} className='mt-2 py-2 px-2 rounded w-full'>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='md:flex md:justify-center'>
                <button className='w-full md:w-1/5 p-3 bg-[#0CC1E0] shadow-[#0CC1E0] text-white font-semibold rounded-md hover:bg-gray-400 hover:text-black hover:shadow-none'>Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default PatientDashboardBookAppointment;