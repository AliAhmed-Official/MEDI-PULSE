import React, { useState } from 'react';
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
  return (
    <>
      <DashboardHeader />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] lg:h-screen'>
        <div className='flex flex-col my-5 bg-[#F0F3FB]'>
          <div className='bg-white text-gray-500 rounded-md mx-3 p-3 flex flex-col gap-8 py-5'>
            <p className='font-semibold text-lg'>Patient Details</p>
            <form className='space-y-8'>
              <div className='flex flex-col gap-6'>
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
              <div className='flex flex-col gap-6'>
                <input type="text" placeholder='Heart Rate' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
                <input type="text" placeholder='Breath Rate' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
                <input type="text" placeholder='ECG' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
                <input type="text" placeholder='Skin Temperature' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
                <input type="text" placeholder='Blood Pressure' value='' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none' readOnly />
              </div>

              <p className='font-semibold text-lg'>Appointment Details</p>
              <div className='flex flex-col gap-6'>
                <select name="" className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none'>
                  <option value="">Select Specialist*</option>
                </select>
                <select name="" className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none'>
                  <option value="">Select Doctor*</option>
                </select>

                <div>
                  <p className='font-semibold text-sm mb-2'>Available Dates*</p>
                  <div id='availabledates' className='flex gap-3 overflow-x-auto'>
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
                  </div>
                </div>

                <div>
                  <p className='font-semibold text-sm'>Available Slots*</p>
                  <div className='grid grid-cols-3 text-sm'>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0] bg-[#e4f6f9]'>01:15 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:35 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:15 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:35 PM</button></div>
                    <div className='p-2 text-center'><button className='p-2 rounded-lg border-2 border-[#0CC1E0]'>01:55 PM</button></div>
                  </div>
                </div>

                <textarea type="text" rows="3" placeholder='Note' className='p-2 border-2 border-gray-400 text-xl rounded-xl focus:border-[#0CC1E0] focus:shadow-[#0CC1E0] focus:outline-none appearance-none'></textarea>
                <div className='flex flex-col border-2 border-dashed p-2'>
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
              <button className='w-full p-3 bg-[#0CC1E0] shadow-[#0CC1E0] text-white font-semibold rounded-md'>Confirm Booking</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default PatientDashboardBookAppointment;