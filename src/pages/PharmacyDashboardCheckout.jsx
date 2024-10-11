import React, { useState } from 'react';
import PharmacyHeaderSidebar from '../components/Pharmacy/PharmacyHeaderSidebar';
import { Link } from 'react-router-dom';

function PharmacyDashboardCheckout() {
  const cartItems = [
    { id: 1, name: 'Panadol Extra', price: 5, quantity: 1 },
    { id: 2, name: 'Vitamin C', price: 8, quantity: 2 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  return (
    <>
      <PharmacyHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] lg:h-screen'>
        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-5 mx-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>

            {/* Billing Information */}
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border rounded-md"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-4">
                  <p>{item.name} (x{item.quantity})</p>
                  <p>Rs {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="flex justify-between font-semibold text-lg">
                <p>Total</p>
                <p>Rs {calculateTotal()}</p>
              </div>
            </div>
            <Link to='/pharmacy/pharmacyinvoice'>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Generate Invoice
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default PharmacyDashboardCheckout;