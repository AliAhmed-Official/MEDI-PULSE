import React from 'react';

function DoctorListCard() {
  return (
    <>
      <div className='my-5 shadow-full mx-2 py-5 px-3 rounded-lg md:w-5/6 md:flex md:justify-between md:p-8 md:min-w-[599px]'>
        <div className='md:mr-1'>
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
        </div>

        <div className='mt-5 flex justify-center gap-4 md:flex-col md:mt-0'>
          <button className='flex-grow py-2 text-sm font-medium text-[#000066] border-2 border-solid border-[#000066] md:flex-grow-0 md:p-3 hover:bg-[#000066] hover:text-white'><span className='flex justify-center items-center gap-2 whitespace-nowrap'><i className="fa-solid fa-video"></i>Online Consult</span></button>
          <button className='flex-grow py-2 text-sm font-medium bg-[#0CC1E0] text-white md:flex-grow-0 md:p-3 hover:text-black hover:bg-gray-400'>Book Appointment</button>
        </div>
      </div>
    </>
  )
}

export default DoctorListCard;