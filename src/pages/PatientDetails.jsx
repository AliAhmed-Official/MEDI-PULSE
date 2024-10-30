import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PatientDetails() {
  const notify = () => {
    toast.warn("We have seen an emergency situation while analyzing your health data", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    notify();
  }, [])
  return (
    <>
      <Header />
      <main className='my-5 z-0 mb-[600px] md:mb-10 md:h-fit h-screen'>
        <div className='md:flex md:justify-center'>
          <div className='mx-3 sm:mx-20 md:mx-3 md:shadow-full md:rounded-xl md:p-4 md:w-1/2'>
            <div className='space-y-1 border-b-2 border-solid'>
              <p className='font-semibold text-xl lg:text-2xl'><i className="fa-solid fa-user-injured"></i> Personal Details</p>
              <p className='font-light pb-3'>We share this information with the doctor</p>
            </div>

            <form className='space-y-5'>
              <div className='mt-3 space-y-3'>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Patient Name:</label><br />
                  <input type="text" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]' placeholder='Enter name...' />
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Gender:</label><br />
                  <select name="" className='w-full p-2 border-2 rounded-lg outline-none'>
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Age:</label><br />
                  <input type="text" className='w-full p-2 border-2 rounded-lg outline-none focus:shadow-[#0CC1E0]' placeholder='Enter age...' />
                </div>
                <div className='space-y-1'>
                  <label htmlFor="" className=''>Relation:</label><br />
                  <select name="" className='w-full p-2 border-2 rounded-lg outline-none'>
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
                  <input type="text" className='w-full p-2 border-2 rounded-lg outline-none' readOnly value='03222506206' />
                </div>
              </div>

              <div className='mt-5 space-y-1 border-b-2 border-solid'>
                <p className='font-semibold text-xl lg:text-2xl'>Fitbit Health Metrics (Optional)</p>
                <p className='font-light pb-3'>Now you can give your health metrics from home by visiting this site: <a href="https://www.fitbit.com/oauth2/authorize?client_id=23PVK7&response_type=code&code_challenge=oAcwswT4r_MkuOgrXZcrzqqx6l2uxHrPqzlcVOk5n2I&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep%20social%20temperature%20weight" target='_blank' className='text-[#0cc1e0]'>Visit Site</a></p>
              </div>

              <div className='space-y-1'>
                <label htmlFor="" className=''>Real Time Heart Rate:</label><br />
                <input type="text" className='w-full p-2 border-2 rounded-lg outline-none' readOnly />
              </div>
            </form>

            <div className='mt-5 space-y-1 border-b-2 border-solid'>
              <p className='font-semibold text-xl lg:text-2xl'><i className="fa-solid fa-credit-card"></i> Payment Information</p>
              <p className='font-light pb-3'>How will you pay for the appointment?</p>
            </div>
            <div className='mt-3 px-2 py-5  border-[1px] border-[#0cc1e0] bg-[#E4F6F9] flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <i className="fa-solid fa-circle-dot text-xl text-[#0cc1e0]"></i>
                <p className=''>Online Payment</p>
              </div>
              <p className='text-center'>Rs. 1,350</p>
            </div>
          </div>

          <div className='hidden md:block md:mx-3'>
            <div className='md:shadow-full md:rounded-xl p-4 flex flex-col gap-5'>
              <div className='flex gap-2 items-center'>
                <img src="/images/me.jpeg" alt="Doctor Image" className='w-12 h-12 rounded-full' />
                <div>
                  <p className='text-lg font-semibold'>Dr. Ali Ahmed</p>
                  <p className='text-sm font-light'>Cardiologist</p>
                </div>
              </div>
              <div className='flex items-center justify-between gap-16 font-medium text-nowrap'>
                <p>Rs 2,400</p>
                <p className='bg-[#F7F8FB] p-2 rounded-2xl'><i className="fa-regular fa-clock"></i> <span>OCT 24, 12:00PM</span></p>
              </div>
              <Link to='/payment' className='text-center p-3 bg-[#0cc1e0] text-white font-medium cursor-pointer hover:bg-[#0d95ad]'><p>Confirm Booking</p></Link>
            </div>
          </div>
        </div>
      </main>

      <div className='fixed bottom-0 w-full px-4 py-5 shadow-full text-sm font-medium  text-gray-500 md:hidden flex flex-col gap-4 z-50 bg-white'>
        <div className='flex justify-between gap-3'>
          <div className='flex items-center gap-2'>
            <i className="fa-regular fa-clock"></i>
            <p className=''>OCT 24, 12:00PM</p>
          </div>
          <div className='flex items-center gap-2'>
            <img src="/images/me.jpeg" alt="Doctor Image" className='w-8 h-8 rounded-full' />
            <p className='text-ellipsis text-nowrap overflow-hidden max-w-[100px]sm:max-w-sm'>Dr. Ali Ahmed</p>
          </div>
        </div>
        <Link to='/payment'>
          <div className='p-3 bg-[#0cc1e0] text-white text-lg'>
            <p className='text-center'>Confirm Booking</p>
          </div>
        </Link>
      </div>

      <div>
        <ToastContainer />
      </div>
    </>
  )
}

export default PatientDetails;