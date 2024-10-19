import React from 'react';

function TableSearchBar({ placeholderText, overlaybtn }) {
  return (
    <>
      <div className='rounded-t-xl bg-[#DAE1F3] p-2 sm:p-4 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0'>
        <div className='rounded-xl relative flex sm:w-80 text-[#6B7280]'>
          <input type="text" className='p-2 focus:outline-none rounded-xl flex-grow focus:shadow-[#0CC1E0]' placeholder={placeholderText} />
          <i className="fa-solid fa-magnifying-glass absolute right-3 top-3"></i>
        </div>
        <div className='text-xl flex justify-center items-center gap-3 font-bold'>
          <i className="fa-solid fa-plus cursor-pointer text-[#4CAF50] rounded-full p-2 hover:bg-slate-300" onClick={overlaybtn}></i>
          <i className="fa-solid fa-arrows-rotate cursor-pointer text-[#6B7280] rounded-full p-2 hover:bg-slate-300"></i>
          <i className="fa-solid fa-download cursor-pointer text-[#0cc1e0] rounded-full p-2 hover:bg-slate-300"></i>
        </div>
      </div>

    </>

  )
}

export default TableSearchBar;