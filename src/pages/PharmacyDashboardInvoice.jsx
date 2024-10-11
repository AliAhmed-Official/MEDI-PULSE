import React from 'react';
import { Link } from 'react-router-dom';

function PharmacyDashboardInvoice() {
  const medicines = [
    { id: 1, name: 'Augmentin', quantity: 2, price: 10.0 },
    { id: 2, name: 'Vitamin C', quantity: 1, price: 15.0 },
  ];
  // Calculate total cost
  const totalAmount = medicines.reduce((total, medicine) => {
    return total + medicine.quantity * medicine.price;
  }, 0);

  return (
    <>
      <Link to='/pharmacy' className='block mt-10 text-start ml-5 text-[#0cc1e0] cursor-pointer'>Back To Precription List</Link>
      <p ></p>
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg my-5">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className='flex justify-center'>
            <img src="/public/images/logo.png" alt="Logo" className='w-40 h-28' />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Medicine Invoice</h1>
          <p className="text-gray-500">Patient Name: Ali Ahmed</p>
          <p className="text-gray-500">Patient Contact: 03222506206</p>
          <p className="text-gray-500">Pharmacist Name: Aqsa Shahid</p>
          <p className="text-gray-500">Date: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Invoice Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Medicine Name</th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left">Unit Price</th>
                <th className="py-3 px-6 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine, index) => (
                <tr
                  key={medicine.id}
                  className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                    }`}
                >
                  <td className="py-4 px-6">{index + 1}</td>
                  <td className="py-4 px-6">{medicine.name}</td>
                  <td className="py-4 px-6">{medicine.quantity}</td>
                  <td className="py-4 px-6">Rs {medicine.price.toFixed(2)}</td>
                  <td className="py-4 px-6">
                    ${(medicine.quantity * medicine.price).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="mt-8 text-right">
          <h2 className="text-xl font-bold text-blue-600">
            Total Amount: Rs {totalAmount.toFixed(2)}
          </h2>
        </div>
      </div>


    </>
  )
}

export default PharmacyDashboardInvoice;