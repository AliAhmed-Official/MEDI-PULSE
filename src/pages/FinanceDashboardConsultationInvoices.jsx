import React from 'react';
import FinanceHeaderSidebar from '../components/Finance/FinanceHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';

function FinanceDashboardConsultationInvoices() {
  const tableheaders = ['Invoice Number', 'MR Number', 'Patient Name', 'Patient Contact', 'Doctor Name', 'Consultation Date', 'Consultation Type', 'Consultation Fee', 'Payment Method', 'Payment Status'];
  return (
    <>
      <FinanceHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Consultation Invoices</p>
          <i className="fa-solid fa-handshake text-center text-xl md:text-2xl"></i>
        </div>

        <div className='m-5'>
          <TableSearchBar placeholderText="Search Invoice" rightButtons='hidden' type='hidden' />
          <div className='overflow-x-auto tablescroll'>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-left">
                  <th className="py-3 px-4 font-medium"><input type="checkbox" name="" /></th>
                  {tableheaders.map((value, index) => (
                    <th className="py-3 px-4 font-medium" key={index}>{value}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="hover:bg-gray-100 cursor-pointer">
                  <td className="py-2 px-4 border-b"><input type="checkbox" name="" id="" /></td>
                  <td className="py-2 px-4 border-b">INV-0001</td>
                  <td className="py-2 px-4 border-b">MR1023</td>
                  <td className="py-2 px-4 border-b">Ali Ahmed</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-phone text-[#0cc1e0]"></i>  {'03222506206'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center gap-3">
                      <img src="/images/khadeejah.jpg" alt="Image" className="w-8 h-8 rounded-full" />
                      <p className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap">
                        Dr. Khadeejah Ashraf
                      </p>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">2024-11-01</td>
                  <td className="py-2 px-4 border-b">2024-10-30</td>
                  <td className="py-2 px-4 border-b">Rs 1000</td>
                  <td className="py-2 px-4 border-b">Credit Card</td>
                  <td className="py-2 px-4 border-b">
                    <select className='p-2 bg-gray-300 rounded-lg cursor-pointer outline-none'>
                      <option value="">Paid</option>
                      <option value="">Pending</option>
                      <option value="">Unpaid</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

export default FinanceDashboardConsultationInvoices;