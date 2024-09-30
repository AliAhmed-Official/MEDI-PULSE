import React from 'react'
import { useState } from 'react';

function DashboardAppointment() {

  return (
    <>
      <section className='flex flex-col flex-grow mx-4 w-fit mt-[60px]'>
        <div className='flex space-x-5 lg:text-xl text-sm items-center mt-5 text-gray-400'>
          <div className='space-x-2 flex items-center'>
            <span className='font-medium'>Doctor Dashboard</span>
            <i className="fa-solid fa-house"></i>
          </div>
          <i className="fa-solid fa-chevron-right text-center text-sm"></i>
          <div className='mt-5s space-x-2  flex items-center'>
            <span className='font-medium'>Appointments</span>
            <i className="fa-solid fa-calendar-plus"></i>
          </div>
        </div>

        <div className='mt-10'>
          <div className='h-16 bg-[#DAE1F3] flex items-center gap-4 pl-6'>
            <p className='text-gray-500 font-semibold'>Appointments</p>
            <form action="" className=''>
              <div className='relative flex items-center'>
                <input type="text" name="" id="" className='p-2 lg:pr-16 rounded-md appearance-none focus:outline-none text-gray-500' placeholder='Search' />
                <i className="fa-solid fa-magnifying-glass absolute right-2 text-gray-500"></i>
              </div>
            </form>
          </div>

          <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Patient name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date & Time
                  </th>
                  <th scope="col" className="px-6 py-3 lg:block hidden">
                    Mobile
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50 cursor-pointer">
                  <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                    Ali Ahmed
                  </th>
                  <td className="px-6 py-4">
                    <i class="fa-solid fa-person fa-2xl"></i>
                  </td>
                  <td className="px-6 py-4">
                    02/25/2018, 06:22pm
                  </td>
                  <td className="px-6 py-4 lg:block hidden">
                    03222506206
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </>
  )
}

export default DashboardAppointment;