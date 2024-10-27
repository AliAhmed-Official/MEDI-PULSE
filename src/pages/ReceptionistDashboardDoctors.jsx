import { React, useState } from 'react';
import ReceptionistHeaderSidebar from '../components/Receptionist/ReceptionistHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';

function ReceptionistDashboardDoctors() {
  const tableheaders = ['Name', 'Gender', 'Department', 'Specialization', 'Availability', 'Timings', 'Mobile', 'Consultation Fee', 'Email', 'Status'];
  return (
    <>
      <ReceptionistHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Doctors</p>
          <i className="fa-solid fa-user-doctor text-center text-xl md:text-2xl"></i>
        </div>

        <div className='m-5'>
          <TableSearchBar placeholderText="Search Doctor" rightButtons='hidden' type='hidden' />
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
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center gap-3">
                      <img src="/images/khadeejah.jpg" alt="Image" className="w-8 h-8 rounded-full" />
                      <p className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap">
                        Dr. Khadeejah Ashraf
                      </p>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b"><p className='bg-[#D4CFE5] p-1 px-2 rounded-md text-[#7E57C6] font-semibold'>Female</p></td>
                  <td className="py-2 px-4 border-b">Cardiology</td>
                  <td className="py-2 px-4 border-b">Cardiologist</td>
                  <td className="py-2 px-4 border-b">Monday, Thursday</td>
                  <td className="py-2 px-4 border-b text-center">12:00PM to 01:00PM</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-phone text-[#0cc1e0]"></i>  {'03222506206'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b">2000</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-regular fa-envelope text-lg text-red-500"></i>  {'aliahmedchamp@gmail.com'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b"><p className='p-1 px-2 bg-green-400 rounded-md text-white font-semibold'>Available</p></td>
                </tr>
              </tbody>
            </table>
          </div >
        </div>
      </main>
    </>
  )
}

export default ReceptionistDashboardDoctors;