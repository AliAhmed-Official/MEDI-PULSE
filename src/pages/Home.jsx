import { React, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeCard from '../components/Cards/HomeCard';
import ConsultDoctorCard from '../components/Cards/ConsultDoctorCard';

function Home() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };
  const sliderRef = useRef(null);
  const cardWidth = 300 + 12;
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
      <main className='mb-20 mx-6 md:mx-10'>
        <section className='mt-10 bg-[#E4F6F9] rounded-3xl min-h-[450px] flex lg:justify-between lg:items-center lg:flex-row flex-col -mx-3 lg:-mx-0'>
          {/* Left arrow button (Desktop only) */}
          <div className="ml-3 rounded-full lg:min-w-11 lg:flex lg:justify-center lg:items-center hidden">
            <div className="rounded-full bg-[#0CC1E0] h-10 w-10 flex justify-center items-center cursor-pointer">
              <i className="fa-solid fa-arrow-left fa-xl" style={{ color: '#fff' }}></i>
            </div>
          </div>

          {/* Main Hero Section */}
          <div className="h-full flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center mx-3 lg:mx-12 mt-4 lg:mt-0 items-center overflow-hidden">
            <div className="lg:w-full lg:mr-10">
              <div className='lg:text-4xl text-3xl font-semibold lg:text-left flex flex-col gap-2'>
                <h1>
                  Your Trusted Care is Just a Click Away <span className="text-[#0CC1E0]">Book Online or Visit Us</span>
                </h1>

              </div>

              {/* Form section */}
              <div className="space-y-7 mt-7">
                <div className="lg:flex">
                  {/* Problem Selection */}
                  <div className="relative flex lg:inline-flex items-center mb-4 lg:mb-0">
                    <i className="fa-solid fa-suitcase-medical fa-lg absolute left-4 text-[#0CC1E0]"></i>
                    <select className="p-3 px-14 rounded-3xl lg:rounded-r-none lg:rounded-l-3xl border-2 border-[#0cc1e0] font-medium focus:outline-none appearance-none flex-grow">
                      <option value="">Select Problem</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/* Specialist Selection */}
                  <div className="relative flex lg:inline-flex items-center">
                    <i className="fa-solid fa-suitcase-medical fa-lg absolute left-4 text-[#0CC1E0]"></i>
                    <select className="p-3 px-14 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl border-2 lg:border-l-0 border-[#0cc1e0] font-medium focus:outline-none appearance-none flex-grow">
                      <option value="">Select Specialist</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Find Now button */}
                <button className="uppercase bg-[#0CC1E0] p-2 lg:p-3 px-5 lg:px-8 rounded-3xl text-white font-semibold lg:block hover:text-[#0CC1E0] hover:bg-white hover:shadow-full shadow-[#0CC1E0]">
                  Find Now
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center w-1/2 mb-6 lg:mb-0 overflow-hidden">
              <img src="/public/images/hero.png" alt="Hero Image" />
            </div>
          </div>

          {/* Right arrow button (Desktop only) */}
          <div className="mr-3 rounded-full lg:min-w-11 lg:flex justify-center items-center hidden">
            <div className="rounded-full bg-[#0CC1E0] h-10 w-10 flex justify-center items-center cursor-pointer">
              <i className="fa-solid fa-arrow-right fa-xl" style={{ color: '#fff' }}></i>
            </div>
          </div>

          {/* Arrow buttons for mobile */}
          <div className="flex lg:hidden justify-end mr-5 mb-5 space-x-2">
            <div className="rounded-full bg-[#0CC1E0] p-2 px-3">
              <i className="fa-solid fa-arrow-left" style={{ color: '#fff' }}></i>
            </div>
            <div className="rounded-full bg-[#0CC1E0] p-2 px-3">
              <i className="fa-solid fa-arrow-right" style={{ color: '#fff' }}></i>
            </div>
          </div>
        </section>

        <section className='mt-10 flex flex-wrap justify-center content-start gap-4'>
          <Link to='/doctors'>
            <HomeCard image="https://oladoc.com/dist/images/online-now-home-2x_compressed.webp" heading='Consult Online Now' description='Instantly connect with Specialists through Video call.' backColor='#E4F6F9' />
          </Link>

          <Link to='/doctors'>
            <HomeCard image="https://oladoc.com/dist/images/home-appt-2xx_compressed.webp" heading='In Clinic Appointments' description="Book an In-Person visit to doctor's clinic." backColor='#FFF1DD' />
          </Link>
        </section>

        <section className='mt-10'>
          <div className='flex flex-col gap-10'>
            <div className='flex justify-between text-lg font-semibold gap-5'>
              <p>Consult best doctors</p>
              <p className='text-[#0CC1E0] cursor-pointer' onClick={toggleOverlay}>View All</p>
            </div>
            <div className='gap-8 justify-center md:justify-start flex flex-wrap'>
              <ConsultDoctorCard image='/public/images/ent-specialist.png' title='ENT Specialist' />
              <ConsultDoctorCard image='/public/images/eye-specialist.png' title='Eye Specialist' />
              <ConsultDoctorCard image='/public/images/child-specialist.png' title='Child Specialist' />
              <ConsultDoctorCard image='/public/images/skin-specialist.png' title='Skin Specialist' />
              <ConsultDoctorCard image='/public/images/dentist.png' title='Dentist' />
              <ConsultDoctorCard image='/public/images/nutritionist.png' title='Nutritionist' />
              <ConsultDoctorCard image='/public/images/diabetologist.png' title='Diabetologist' />
              <ConsultDoctorCard image='/public/images/blood-specialist.png' title='Hematologist' />
            </div>
          </div>
        </section>

        {isOverlayVisible ?
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay}>
            <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-3 md:mx-0 md:max-w-2xl w-full h-[330px] md:h-[500px] flex flex-col" onClick={(e) => e.stopPropagation()}>

              <div className='text-center relative grid items-center text-xl'>
                <p className='font-semibold'>Find a doctor online</p>
                <i className="fa-solid fa-xmark text-gray-500 cursor-pointer absolute right-0" onClick={toggleOverlay}></i>
              </div>

              <div className='mt-5 text-gray-500 flex items-center border-2 border-gray-400'>
                <i className="fa-solid fa-magnifying-glass p-2 text-xl"></i>
                <input type="text" className='flex-grow p-2 focus:outline-none appearance-none' placeholder='Search for specialization' />
              </div>

              <div className='mt-5 flex flex-col md:grid md:grid-cols-3 gap-2 flex-grow md:flex-grow-0 overflow-auto availabledates'>
                <div className='border-[1px] border-gray-300 p-1 rounded-lg border-r-4 border-r-[#0CC1E0] flex items-center gap-3'>
                  <img src="/public/images/skin-specialist.png" alt="Specialization Image" className='w-12 h-12 rounded-full' />
                  <p className='text-center font-medium text-sm text-gray-500'>Skin Specialist</p>
                </div>

                <div className='border-[1px] border-gray-300 p-1 rounded-lg border-r-4 border-r-[#0CC1E0] flex items-center gap-3'>
                  <img src="/public/images/skin-specialist.png" alt="Specialization Image" className='w-12 h-12 rounded-full' />
                  <p className='text-center font-medium text-sm text-gray-500'>Skin Specialist</p>
                </div>
              </div>

            </div>
          </div>
          : null}

        <section className='mt-10 relative'>
          <div className='md:mx-2'>
            <div className='text-center space-y-2 pb-12'>
              <h5 className='font-semibold text-3xl'>Our Customers love us</h5>
              <p className='text-[17px]'>Check out the reviews from our satisfied customers</p>
            </div>

            <div className='p-2 flex gap-5 overflow-auto availabledates ' ref={sliderRef}>
              <div className='hidden absolute left-0 top-[60%] z-30 rounded-full w-10 h-10 md:flex items-center justify-center bg-[#0CC1E0] text-white cursor-pointer' onClick={prevSlide}>
                <i className="fa-solid fa-arrow-left text-xl"></i>
              </div>

              <div className='w-[243px] min-w-[243px] lg:py-6 lg:px-9 lg:w-[367px] lg:min-w-[367px] lg:m-[10px] md:w-[283px] md:min-w-[283px] px-5 py-[23px] m-[8px] flex flex-col shadow-gray-300 shadow-full rounded-xl items-center gap-4 '>
                <div className='rounded-lg p-3 text-[#0CC1E0] bg-[#E4F6F9] flex items-center justify-center gap-1 text-sm w-fit'>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className='text-center text-gray-600 text-xs lg:text-sm'>Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.</p>
                <div className='flex flex-col items-center gap-2'>
                  <img src="/public/images/me.jpeg" alt="Patient Image" className='rounded-full w-[50px] h-[50px] md:w-16 md:h-16 border-2 border-[#0CC1E0]' />
                  <p className='text-[#0CC1E0] font-medium text-[12px] md:text-base'>Ali Ahmed</p>
                </div>
              </div>

              <div className='w-[243px] min-w-[243px] lg:py-6 lg:px-9 lg:w-[367px] lg:min-w-[367px] lg:m-[10px] md:w-[283px] md:min-w-[283px] px-5 py-[23px] m-[8px] flex flex-col shadow-gray-300 shadow-full rounded-xl items-center gap-4 '>
                <div className='rounded-lg p-3 text-[#0CC1E0] bg-[#E4F6F9] flex items-center justify-center gap-1 text-sm w-fit'>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className='text-center text-gray-600 text-xs lg:text-sm'>Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.</p>
                <div className='flex flex-col items-center gap-2'>
                  <img src="/public/images/me.jpeg" alt="Patient Image" className='rounded-full w-[50px] h-[50px] md:w-16 md:h-16 border-2 border-[#0CC1E0]' />
                  <p className='text-[#0CC1E0] font-medium text-[12px] md:text-base'>Ali Ahmed</p>
                </div>
              </div>

              <div className='w-[243px] min-w-[243px] lg:py-6 lg:px-9 lg:w-[367px] lg:min-w-[367px] lg:m-[10px] md:w-[283px] md:min-w-[283px] px-5 py-[23px] m-[8px] flex flex-col shadow-gray-300 shadow-full rounded-xl items-center gap-4 '>
                <div className='rounded-lg p-3 text-[#0CC1E0] bg-[#E4F6F9] flex items-center justify-center gap-1 text-sm w-fit'>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className='text-center text-gray-600 text-xs lg:text-sm'>Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.</p>
                <div className='flex flex-col items-center gap-2'>
                  <img src="/public/images/me.jpeg" alt="Patient Image" className='rounded-full w-[50px] h-[50px] md:w-16 md:h-16 border-2 border-[#0CC1E0]' />
                  <p className='text-[#0CC1E0] font-medium text-[12px] md:text-base'>Ali Ahmed</p>
                </div>
              </div>

              <div className='w-[243px] min-w-[243px] lg:py-6 lg:px-9 lg:w-[367px] lg:min-w-[367px] lg:m-[10px] md:w-[283px] md:min-w-[283px] px-5 py-[23px] m-[8px] flex flex-col shadow-gray-300 shadow-full rounded-xl items-center gap-4 '>
                <div className='rounded-lg p-3 text-[#0CC1E0] bg-[#E4F6F9] flex items-center justify-center gap-1 text-sm w-fit'>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className='text-center text-gray-600 text-xs lg:text-sm'>Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.</p>
                <div className='flex flex-col items-center gap-2'>
                  <img src="/public/images/me.jpeg" alt="Patient Image" className='rounded-full w-[50px] h-[50px] md:w-16 md:h-16 border-2 border-[#0CC1E0]' />
                  <p className='text-[#0CC1E0] font-medium text-[12px] md:text-base'>Ali Ahmed</p>
                </div>
              </div>

              <div className='w-[243px] min-w-[243px] lg:py-6 lg:px-9 lg:w-[367px] lg:min-w-[367px] lg:m-[10px] md:w-[283px] md:min-w-[283px] px-5 py-[23px] m-[8px] flex flex-col shadow-gray-300 shadow-full rounded-xl items-center gap-4 '>
                <div className='rounded-lg p-3 text-[#0CC1E0] bg-[#E4F6F9] flex items-center justify-center gap-1 text-sm w-fit'>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className='text-center text-gray-600 text-xs lg:text-sm'>Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.</p>
                <div className='flex flex-col items-center gap-2'>
                  <img src="/public/images/me.jpeg" alt="Patient Image" className='rounded-full w-[50px] h-[50px] md:w-16 md:h-16 border-2 border-[#0CC1E0]' />
                  <p className='text-[#0CC1E0] font-medium text-[12px] md:text-base'>Ali Ahmed</p>
                </div>
              </div>

              <div className='w-[243px] min-w-[243px] lg:py-6 lg:px-9 lg:w-[367px] lg:min-w-[367px] lg:m-[10px] md:w-[283px] md:min-w-[283px] px-5 py-[23px] m-[8px] flex flex-col shadow-gray-300 shadow-full rounded-xl items-center gap-4 '>
                <div className='rounded-lg p-3 text-[#0CC1E0] bg-[#E4F6F9] flex items-center justify-center gap-1 text-sm w-fit'>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className='text-center text-gray-600 text-xs lg:text-sm'>Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.</p>
                <div className='flex flex-col items-center gap-2'>
                  <img src="/public/images/me.jpeg" alt="Patient Image" className='rounded-full w-[50px] h-[50px] md:w-16 md:h-16 border-2 border-[#0CC1E0]' />
                  <p className='text-[#0CC1E0] font-medium text-[12px] md:text-base'>Ali Ahmed</p>
                </div>
              </div>

              <div className='hidden absolute right-0 top-[60%] z-30 rounded-full w-10 h-10 md:flex items-center justify-center bg-[#0CC1E0] text-white cursor-pointer' onClick={nextSlide}>
                <i className="fa-solid fa-arrow-right text-xl"></i>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default Home;