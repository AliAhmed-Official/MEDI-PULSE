import React from 'react';
import { Link } from 'react-router-dom';

function DoctorListCard() {
  return (
    <>
      <div className='my-5 shadow-full mx-3 py-5 px-3 rounded-lg md:w-5/6 md:flex md:justify-between md:p-8 md:min-w-[599px]'>
        <div className='md:mr-1 md:flex md:flex-col'>
          <div className='flex gap-3 md:gap-5'>
            <img src="/public/images/me.jpeg" alt="Doctor Image" className='w-16 h-16 rounded-full md:w-24 md:h-24' />
            <div className='flex-grow'>
              <h3 className='font-medium capitalize md:text-2xl'>Dr Ali Ahmed</h3>
              <p className='text-sm capitalize mt-1 md:text-[16px] md:mt-2'>Dermatologist, Cosmetologist</p>
              <p className='text-sm line-clamp-1 md:text-[16px] md:line-clamp-none'>M.B.B.S, M.C.P.S (Derma)</p>
              <div className='md:flex mt-5 hidden'>
                <p className='capitalize text-[16px] font-medium'>8 Years <br /><span className='text-sm font-normal'>Experience</span></p>
                <div className="border-r-2 border-solid border-gray-300 my-0 mx-8 h-[50px]"></div>
                <p className='capitalize text-[16px] font-medium'>100% (12) <br /><span className='text-sm font-normal'>Satisfied</span></p>
              </div>
            </div>
          </div>

          <div className='flex justify-center mt-5 md:hidden'>
            <p className='capitalize text-[16px] text-center font-medium'>8 Years <br /><span className='text-sm font-normal'>Experience</span></p>
            <div className="border-r-2 border-solid border-gray-300 my-0 mx-2 h-[50px]"></div>
            <p className='capitalize text-[16px] text-center font-medium'>100% (12) <br /><span className='text-sm font-normal'>Satisfied</span></p>
          </div>

          <div className='md:block flex-grow hidden'>
            <div className='mt-5 rounded-lg border-2 border-[#0cc1e0]'>
              <div className='p-4 flex justify-between md:text-sm lg:text-base text-green-600'>
                <p><i className="fa-solid fa-circle"></i> Available Today</p>
                <p className='font-semibold'>Rs 1000</p>
              </div>
              <div className='bg-[#0cc1e0] text-white shine-effect'>
                <p className='text-center p-0.5'>Consultation Fee</p>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:flex justify-center md:hidden'>
          <div className='mt-5 rounded-lg border-2 border-[#0cc1e0] sm:w-1/2'>
            <div className='p-3 flex justify-between text-xs text-green-600'>
              <p><i className="fa-solid fa-circle"></i> Available Today</p>
              <p className='font-semibold'>Rs 1000</p>
            </div>
            <div className='bg-[#0cc1e0] text-white shine-effect'>
              <p className='text-center p-0.5'>Consultation Fee</p>
            </div>
          </div>
        </div>

        <div className='mt-5 flex justify-center gap-4 md:flex-col md:mt-0'>
          <Link to='/appointmentslotsdates' className='flex-grow py-2 text-sm font-medium text-[#0CC1E0] border-2 border-solid border-[#0CC1E0] md:flex-grow-0 md:p-3 hover:bg-[#0CC1E0] hover:text-white'><span className='flex justify-center items-center gap-2 whitespace-nowrap'><i className="fa-solid fa-video"></i>Online Consult</span></Link>
          <Link to='/appointmentslotsdates' className='flex-grow py-2 text-sm font-medium bg-[#0CC1E0] text-white md:flex-grow-0 md:p-3 hover:text-black hover:bg-gray-400 text-center'><span>Book Appointment</span></Link>
        </div>
      </div>
    </>
  )
}

export default DoctorListCard;