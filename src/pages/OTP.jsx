import React from 'react';
import { useRef } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function OTP() {
  const inputRefs = useRef([]);
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <Header />
      <main className="w-full mb-10 md:mb-20">
        <section className='w-full h-full '>
          <div className='mx-2 bg-[#aae9f3] mt-5 p-5 flex flex-col items-center text-gray-500 gap-5 rounded-xl shadow-[#aae9f3] shadow-md'>
            <i className="fa-regular fa-circle-check text-5xl"></i>
            <div className='space-y-3 text-center'>
              <p className='text-3xl font-medium'>OTP Verification</p>
              <p className=' font-medium'>Code has been send to xxxxxxx6206</p>
            </div>
          </div>

          <div className='mx-2 mt-5 text-center text-3xl'>
            <p>1:23</p>
          </div>

          <div className='mx-2 mt-5 text-center space-x-3'>
            {Array(4).fill('').map((_, index) => (
              <input type="text" className='border-b-[#0CC1E0] border-2 border-solid border-t-0 border-r-0 border-l-0 appearance-none focus:outline-none w-14 h-14 text-center text-2xl' key={index} maxLength="1" ref={(el) => (inputRefs.current[index] = el)} onChange={(e) => handleInputChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} autoFocus={index === 0} inputMode="numeric" pattern="[0-9]*" />
            ))}
          </div>

          <div className='mx-2 mt-10 text-center space-y-5'>
            <p>Don't get code? <button className='text-[#0CC1E0]'>Resend</button></p>
            <button className='p-2 px-10 bg-[#0CC1E0] text-white font-medium rounded-md hover:bg-gray-400 hover:text-black'>Verify</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default OTP;