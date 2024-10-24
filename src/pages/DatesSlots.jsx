import { React, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function DatesSlots() {
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
      <Header />
      <main className='my-5 md:mb-20'>

        <div className='mx-2 md:mx-20 lg:mx-40'>
          <div className='shadow-full rounded-lg p-5 flex items-center gap-3'>
            <img src="/images/me.jpeg" alt="Doctor Image" className='w-20 h-20 rounded-full' />
            <div className='font-semibold flex flex-col gap-0.5 text-xs sm:text-sm'>
              <p className='md:text-2xl text-lg sm:text-xl'>Dr. Lubaid Ahmed</p>
              <p className='font-normal'>Online Video Consultation (Online)</p>
              <p className='font-medium'>Consultation Fee: Rs 2,500</p>
            </div>
          </div>

          <div className='shadow-full rounded-lg mt-5'>
            <div className='flex justify-between border-b-2 border-solid'>
              <div className='p-5 flex items-center'><i className="fa-solid fa-angle-left cursor-pointer text-center" onClick={prevSlide}></i></div>

              <div className='flex-grow flex font-medium overflow-x-auto availabledates' ref={sliderRef}>
                <div className='flex-shrink-0 items-center p-7 cursor-pointer border-b-4 border-[#0cc1e0]'><p className='text-[#0cc1e0]'>OCT, 24</p></div>
                <div className='flex-shrink-0 items-center p-7 cursor-pointer'><p className=''>OCT, 25</p></div>
                <div className='flex-shrink-0 items-center p-7 cursor-pointer'><p className=''>OCT, 26</p></div>
                <div className='flex-shrink-0 items-center p-7 cursor-pointer'><p className=''>OCT, 27</p></div>
                <div className='flex-shrink-0 items-center p-7 cursor-pointer'><p className=''>OCT, 28</p></div>
                <div className='flex-shrink-0 items-center p-7 cursor-pointer'><p className=''>OCT, 29</p></div>
                <div className='flex-shrink-0 items-center p-7 cursor-pointer'><p className=''>OCT, 30</p></div>
                <div className='flex-shrink-0 items-center p-7 cursor-pointer'><p className=''>OCT, 31</p></div>
                <div className='flex-shrink-0 items-center p-7 cursor-pointer'><p className=''>NOV, 01</p></div>
              </div>

              <div className='p-5 flex items-center'><i className="fa-solid fa-angle-right cursor-pointer text-center" onClick={nextSlide}></i></div>
            </div>

            <div className='p-5 text-gray-500'>
              <p><i className="fa-regular fa-clock"></i> Slots</p>
            </div>

            <div className='p-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-3'>

              <Link to='/patientdetails' className='cursor-pointer p-2 border-2 border-[#0cc1e0] bg-[#E4F6F9] rounded-lg text-[#0cc1e0] font-medium'>
                <p className='text-center'>12:00 PM</p>
              </Link>

              <div className='cursor-pointer p-2 border-2 rounded-lg font-medium'>
                <p className='text-center'>01:00 PM</p>
              </div>
              <div className='cursor-pointer p-2 border-2 rounded-lg font-medium'>
                <p className='text-center'>01:00 PM</p>
              </div>
              <div className='cursor-pointer p-2 border-2 rounded-lg font-medium'>
                <p className='text-center'>01:00 PM</p>
              </div>
              <div className='cursor-pointer p-2 border-2 rounded-lg font-medium'>
                <p className='text-center'>01:00 PM</p>
              </div>

            </div>
          </div>

          <div className='flex items-center gap-3 mt-10'>
            <i className="fa-solid fa-square-check fa-fade text-3xl sm:text-4xl text-[#0cc1e0]"></i>
            <div className='space-y-1'>
              <p className='font-semibold text-sm sm:text-base md:text-xl'>95% patients feel satisfied after booking appointment from MEDIPULSE</p>
              <p className='text-xs'>It takes only 30 sec to book an appointment</p>
            </div>
          </div>

          <div className='mt-10'>
            <p className='font-semibold text-xl sm:text-2xl'>Reviews about Dr. Lubaid Ahmed (3)</p>

            <div className='flex flex-col gap-5 mt-10'>
              <div className='md:w-5/6 p-5 rounded-lg border-2 border-dashed space-y-8'>
                <div>
                  <div className='flex gap-2 items-center font-semibold text-lg'>
                    <i className="fa-regular fa-thumbs-up"></i>
                    <p>I recommend the doctor</p>
                  </div>
                  <p className='text-sm text-gray-500'>"I have satisfied with communication Dr. Ali Ahmed I am satisfied"</p>
                </div>

                <p className='text-sm text-gray-500'>Verified Patient
                  U***n . 2 days ago</p>

              </div>

              <div className='md:w-5/6 p-5 rounded-lg border-2 border-dashed space-y-8'>
                <div>
                  <div className='flex gap-2 items-center font-semibold text-lg'>
                    <i className="fa-regular fa-thumbs-down"></i>
                    <p>I don't recommend the doctor</p>
                  </div>
                  <p className='text-sm text-gray-500'>"I am not satisfied with communication Dr. Ali Ahmed"</p>
                </div>

                <p className='text-sm text-gray-500'>Verified Patient
                  U***n . 2 days ago</p>

              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default DatesSlots;