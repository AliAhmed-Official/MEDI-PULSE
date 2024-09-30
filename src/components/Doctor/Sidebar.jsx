import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar({ transformValue }) {

  return (
    <>
      <div className='h-full w-60 fixed left-0 top-0 mt-[60px] bg-[#E4F6F9] transition-transform duration-500 ease-in-out z-20 flex flex-col items-center' style={{ transform: transformValue }}>

        <div className='flex flex-col items-center text-[#0CBEE4] border-b-2 border-solid border-[#0CBEE4] mt-10'>
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316605.png" alt="Doctor Image" className='h-28 w-28 rounded-full border-4 border-solid border-[#0CBEE4]' />
          <h4 className='font-medium'>King Kohli</h4>
          <p className='text-[12px] pb-2'>Cricketer</p>
        </div>

        <ul className='m-0 p-0 mt-10'>
          <li><a href="" className='block py-4 hover:text-[#0CBEE4]'><i className="fa-solid fa-house fa-lg w-6 mr-2"></i>Dashboard</a></li>
          <li><a href="" className='block py-4 hover:text-[#0CBEE4] '><i className="fa-solid fa-calendar-plus fa-lg w-6 mr-2"></i>Appointments</a></li>
          <li><a href="" className='block py-4 hover:text-[#0CBEE4] '><i className="fa-solid fa-gear fa-lg w-6 mr-2"></i>Settings</a></li>
          <li><a href="" className='block py-4 hover:text-[#0CBEE4] '><i className="fa-solid fa-right-from-bracket fa-lg w-6 mr-2"></i>Logout</a></li>
        </ul>
      </div >
    </>
  )
}

export default Sidebar;