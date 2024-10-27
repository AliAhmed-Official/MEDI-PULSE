import React from 'react'

function ConsultationInvoice() {
  return (
    <>
      <div className='p-10'>
        <div class="max-w-2xl mx-auto bg-white shadow-full rounded-lg p-8">
          <div class="flex justify-between items-center border-b pb-4 mb-6">
            <div>
              <img src="/images/logo.png" alt="Logo" className='w-32 h-20' />
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600">Date: [Date of Invoice Generation]</p>
              <p class="text-lg font-semibold text-gray-700">Invoice No: INV-0001</p>
            </div>
          </div>

          <div class="mb-4">
            <h2 class="text-lg font-bold text-gray-700">Patient Details</h2>
            <div class="text-sm text-gray-600 mt-2">
              <p><span class="font-semibold">Patient ID:</span> MR1023</p>
              <p><span class="font-semibold">Patient Name:</span> Khadeejah Ashraf</p>
              <p><span class="font-semibold">Appointment Date:</span> 2024-10-30</p>
              <p><span class="font-semibold">Appointment Time:</span> 12:00PM</p>
              <p><span class="font-semibold">Doctor Name:</span> Dr. Ali Ahmed</p>
              <p><span class="font-semibold">Specialty:</span> Cardiology</p>
            </div>
          </div>

          <div class="border-t border-b py-4 mb-4">
            <h2 class="text-lg font-bold text-gray-700 mb-4">Consultation Invoice</h2>
            <table class="w-full text-sm">
              <thead>
                <tr>
                  <th class="py-2 text-left text-gray-700 font-semibold">Description</th>
                  <th class="py-2 text-left text-gray-700 font-semibold">Details</th>
                  <th class="py-2 text-right text-gray-700 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 text-gray-600">Consultation Fee</td>
                  <td class="py-2 text-gray-600">Initial Consultation</td>
                  <td class="py-2 text-right text-gray-700 font-medium">Rs 2000.00</td>
                </tr>
                <tr>
                  <td colspan="2" class="py-2 text-right font-bold text-gray-700">Total</td>
                  <td class="py-2 text-right font-bold text-gray-700">Rs 2000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mb-4">
            <p class="text-gray-600"><span class="font-semibold">Payment Method:</span> Credit Card (or specify method)</p>
            <p class="text-gray-600"><span class="font-semibold">Payment Status:</span> Paid</p>
          </div>

          <div class="border-t pt-4">
            <p class="text-sm text-gray-500">Please keep this invoice for your records.</p>
            <p class="text-sm text-gray-500">For further assistance, contact us at [Clinic Contact Information].</p>
            <p class="text-sm text-gray-500">Thank you for choosing [Clinic/Hospital Name] for your healthcare needs!</p>
          </div>
        </div>

        <div class="flex justify-center mt-5 space-x-4">
          <button onclick="window.print()" class="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 flex items-center">
            <i class="fas fa-print mr-2"></i> Print Invoice
          </button>
          <button onclick="downloadInvoice()" class="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 flex items-center">
            <i class="fas fa-download mr-2"></i> Download Invoice
          </button>
        </div>
      </div>
    </>
  )
}

export default ConsultationInvoice;