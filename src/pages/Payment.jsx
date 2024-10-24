import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';

function Payment() {
  return (
    <>
      <Header />
      <main className='flex flex-col justify-center gap-5 items-center mx-3 md:mx-0 my-5'>
        <div className='flex flex-col gap-5'>
          <div className='max-w-md w-full bg-white p-4 rounded-lg shadow-full flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <img src="/images/khadeejah.jpg" alt="Doctor Image" className='w-12 h-12 md:w-20 md:h-20 rounded-full' />
              <div className='flex flex-col gap-0.5'>
                <p className='font-semibold text-lg text-ellipsis text-nowrap max-w-[120px] overflow-hidden sm:max-w-sm'>Dr. Khadeejah Ashraf</p>
                <p className='text-sm font-light text-ellipsis text-nowrap max-w-[120px] overflow-hidden sm:max-w-sm'>Cardiologist</p>
                <p className='text-sm'>OCT 24, 12:00PM</p>
              </div>
            </div>
            <p className='font-bold text-[#0cc1e0] text-lg'>Rs 2,500</p>
          </div>

          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-full">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-700 text-center"><i className="fa-solid fa-credit-card text-[#0cc1e0]"></i> Credit Card Payment</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label for="name" className="block text-gray-600 font-semibold mb-2">Name on Card</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0cc1e0]" placeholder="John Doe" required />
              </div>
              <div className="mb-4">
                <label for="card-number" className="block text-gray-600 font-semibold mb-2">Card Number</label>
                <input type="text" id="card-number" name="card-number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0cc1e0]" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label for="expiry" className="block text-gray-600 font-semibold mb-2">Expiry Date</label>
                  <input type="text" id="expiry" name="expiry" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0cc1e0]" placeholder="MM/YY" required />
                </div>
                <div className="mb-4">
                  <label for="cvc" className="block text-gray-600 font-semibold mb-2">CVC</label>
                  <input type="text" id="cvc" name="cvc" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0cc1e0]" placeholder="123" required />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#0cc1e0] text-white py-2 rounded-lg hover:bg-[#11a6c0] transition-colors duration-300">Submit Payment</button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Payment;