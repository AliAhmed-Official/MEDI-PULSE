import { React, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReceptionistHeaderSidebar from '../components/Receptionist/ReceptionistHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';

function ReceptionistDashboardAppointments() {
  const [isOverlayVisible1, setOverlayVisible1] = useState(false);
  const toggleOverlay1 = () => {
    setOverlayVisible1(!isOverlayVisible1);
  };
  const [isOverlayVisible2, setOverlayVisible2] = useState(false);
  const toggleOverlay2 = () => {
    setOverlayVisible2(!isOverlayVisible2);
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
  const tableheaders = ['Appointment ID', 'MR Number', 'Patient Name', 'Patient Contact', 'Doctor Name', 'Doctor Specialty', 'Appointment Date', 'Appointment Time', 'Appointment Type', 'Booking Date', 'Status', 'Actions'];
  return (
    <>
      <ReceptionistHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Appointments</p>
          <i className="fa-solid fa-clipboard-list text-center text-xl md:text-2xl"></i>
        </div>

        <div className='m-5'>
          <TableSearchBar placeholderText="Search Appointment" overlaybtn={toggleOverlay1} />
          <div className='overflow-x-auto tablescroll'>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-left">
                  <th className="py-3 px-4 font-medium"><input type="checkbox" name="" /></th>
                  {tableheaders.map((value, index) => (
                    <th className="py-3 px-4 font-medium" key={index}>{value}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="hover:bg-gray-100 cursor-pointer">
                  <td className="py-2 px-4 border-b"><input type="checkbox" name="" id="" /></td>
                  <td className="py-2 px-4 border-b">1001</td>
                  <td className="py-2 px-4 border-b">MR1023</td>
                  <td className="py-2 px-4 border-b">Ali Ahmed</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-phone text-[#0cc1e0]"></i>  {'03222506206'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center gap-3">
                      <img src="/images/khadeejah.jpg" alt="Image" className="w-8 h-8 rounded-full" />
                      <p className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap">
                        Dr. Khadeejah Ashraf
                      </p>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">Cardiology</td>
                  <td className="py-2 px-4 border-b">2024-10-30</td>
                  <td className="py-2 px-4 border-b">10:30 AM</td>
                  <td className="py-2 px-4 border-b">In-Person</td>
                  <td className="py-2 px-4 border-b">2024-10-25</td>
                  <td className="py-2 px-4 border-b"><p className='p-1 px-2 bg-green-400 rounded-md text-white font-semibold text-center'>Scheduled</p></td>
                  <td className="py-2 px-4 border-b text-lg">
                    <div className='flex items-center gap-2'>
                      <i className="fa-regular fa-pen-to-square text-[#0cc1e0] p-2 hover:bg-[#DAE1F3] rounded-full" onClick={toggleOverlay2}></i><i className="fa-solid fa-trash-can text-red-500 p-2 hover:bg-[#DAE1F3] rounded-full"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div >
        </div>
      </main>

      {/* Book Appointment Overlay */}
      {isOverlayVisible1 ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay1}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-3 lg:mx-0 md:max-w-3xl w-full h-[330px] md:h-[500px] flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-xl sm:text-2xl md:text-3xl text-gray-500'>Book Apointment</p>
              <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-2xl text-end" onClick={toggleOverlay1}></i>
            </div>

            <form className='mt-5 md:mx-5 flex flex-col text-gray-500 gap-5'>
              <div className='flex flex-col gap-2'>
                <div className='space-y-1 border-b-2 border-solid'>
                  <p className='font-semibold text-xl lg:text-2xl'><i className="fa-solid fa-user-injured"></i> Personal Details</p>
                  <p className='font-light pb-3'>We share this information with the doctor</p>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Patient Name:</label><br />
                  <input type="text" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]' placeholder='Enter name...' />
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Relation:</label><br />
                  <select name="" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]'>
                    <option value="">Self</option>
                    <option value="">Father</option>
                    <option value="">Mother</option>
                    <option value="">Spouse</option>
                    <option value="">Son</option>
                    <option value="">Daughter</option>
                    <option value="">Other</option>
                  </select>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Phone Name:</label><br />
                  <input type="text" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]' />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='space-y-1 border-b-2 border-solid'>
                  <p className='font-semibold text-xl lg:text-2xl'><i className="fa-solid fa-clipboard-list"></i> Appointment Details</p>
                  <p className='font-light pb-3'>We share this information with the doctor</p>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Select Specialist:</label><br />
                  <select name="" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]'>
                    <option value="">Cardiologist</option>
                  </select>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Select Doctor:</label><br />
                  <select name="" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]'>
                    <option value="">Dr. Khadeejah Ashraf</option>
                  </select>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Consultation Fee:</label><br />
                  <input type="text" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]' value='Rs 2000' readOnly />
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Available Dates:</label><br />
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

                <div className='space-y-1'>
                  <label htmlFor="" className=''>Available Slots:</label><br />
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
              </div>
              <div className='flex md:block justify-center items-center'>
                <Link to='/receptionistdashboard/appointments/consultationinvoice'>
                  <button className='p-3 bg-[#0cc1e0] text-white font-semibold rounded-sm '>Book Appointment</button>
                </Link>
              </div>
            </form>

          </div>
        </div>
        : null}

      {/* Edit Appointment Overlay */}
      {isOverlayVisible2 ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay2}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-3 lg:mx-0 md:max-w-3xl w-full h-[330px] md:h-[500px] flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-xl sm:text-2xl md:text-3xl text-gray-500'>Edit Apointment</p>
              <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-2xl text-end" onClick={toggleOverlay2}></i>
            </div>

            <form className='mt-5 md:mx-5 flex flex-col text-gray-500 gap-5'>
              <div className='flex flex-col gap-2'>
                <div className='space-y-1 border-b-2 border-solid'>
                  <p className='font-semibold text-xl lg:text-2xl'><i className="fa-solid fa-user-injured"></i> Personal Details</p>
                  <p className='font-light pb-3'>We share this information with the doctor</p>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Patient Name:</label><br />
                  <input type="text" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]' placeholder='Enter name...' />
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Relation:</label><br />
                  <select name="" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]'>
                    <option value="">Self</option>
                    <option value="">Father</option>
                    <option value="">Mother</option>
                    <option value="">Spouse</option>
                    <option value="">Son</option>
                    <option value="">Daughter</option>
                    <option value="">Other</option>
                  </select>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Phone Name:</label><br />
                  <input type="text" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]' />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='space-y-1 border-b-2 border-solid'>
                  <p className='font-semibold text-xl lg:text-2xl'><i className="fa-solid fa-clipboard-list"></i> Appointment Details</p>
                  <p className='font-light pb-3'>We share this information with the doctor</p>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Select Specialist:</label><br />
                  <select name="" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]'>
                    <option value="">Cardiologist</option>
                  </select>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Select Doctor:</label><br />
                  <select name="" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]'>
                    <option value="">Dr. Khadeejah Ashraf</option>
                  </select>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Consultation Fee:</label><br />
                  <input type="text" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]' value='Rs 2000' readOnly />
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Available Dates:</label><br />
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

                <div className='space-y-1'>
                  <label htmlFor="" className=''>Available Slots:</label><br />
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

                <div className='space-y-1'>
                  <label htmlFor="" className=''>Status:</label><br />
                  <select name="" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]'>
                    <option value="">Scheduled</option>
                    <option value="">Check-In</option>
                    <option value="">Completed</option>
                    <option value="">Cancel</option>
                  </select>
                </div>
              </div>
              <div className='flex md:block justify-center items-center'>
                <Link to='/receptionistdashboard/appointments/consultationinvoice'>
                  <button className='p-3 bg-[#0cc1e0] text-white font-semibold rounded-sm '>Book Appointment</button>
                </Link>
              </div>
            </form>

          </div>
        </div>
        : null}
    </>
  )
}

export default ReceptionistDashboardAppointments;