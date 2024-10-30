import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorHeaderSidebar from '../components/Doctor/DoctorHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';

function DoctorDashboardListAppointments() {
  const tableheaders = ['Appointment ID', 'Date of Appointment', 'Time of Appointment', 'Patient Name', 'Patient Phone', 'Appointment Type', 'Status', 'Action'];
  return (
    <>
      <DoctorHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Appointments List</p>
          <i className="fa-solid fa-clipboard-list text-center text-xl md:text-2xl"></i>
        </div>

        <div className='m-5'>
          <TableSearchBar placeholderText="Search Appointment" rightButtons='hidden' />
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
                  <td className="py-2 px-4 border-b">APPT-1001</td>
                  <td className="py-2 px-4 border-b">20/10/2024</td>
                  <td className="py-2 px-4 border-b">12:00PM</td>
                  <td className="py-2 px-4 border-b">Alishbah Ahmed</td>
                  <td className="py-2 px-4 border-b">03212412171</td>
                  <td className="py-2 px-4 border-b">In-Person</td>
                  <td className="py-2 px-4 border-b"><span className='p-2 bg-green-500 text-white font-semibold rounded-md'>Completed</span></td>
                  <td className="py-2 px-4 border-b text-lg">
                    <div className='flex justify-around text-lg'>
                      <Link to='/doctordashboard/doctordashboardpatientdetail'><i className="fa-solid fa-eye text-[#4BA650] cursor-pointer" ></i></Link>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 cursor-pointer">
                  <td className="py-2 px-4 border-b"><input type="checkbox" name="" id="" /></td>
                  <td className="py-2 px-4 border-b">APPT-1001</td>
                  <td className="py-2 px-4 border-b">20/10/2024</td>
                  <td className="py-2 px-4 border-b">12:00PM</td>
                  <td className="py-2 px-4 border-b">Ali Ahmed</td>
                  <td className="py-2 px-4 border-b">03222506206</td>
                  <td className="py-2 px-4 border-b">In-Person</td>
                  <td className="py-2 px-4 border-b"><span className='p-2 bg-yellow-500 text-white font-semibold rounded-md'>Pending</span></td>
                  <td className="py-2 px-4 border-b text-lg">
                    <div className='flex justify-around text-lg'>
                      <Link to='/doctordashboard/doctordashboardpatientdetail'><i className="fa-solid fa-eye text-[#4BA650] cursor-pointer" ></i></Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div >
        </div>
      </main>
    </>
  )
}

export default DoctorDashboardListAppointments;