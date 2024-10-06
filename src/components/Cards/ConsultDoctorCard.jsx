import React from 'react';

function ConsultDoctorCard({ image, title }) {
  return (
    <>
      <div className='flex flex-col items-center gap-5 px-2 pb-5 cursor-pointer max-w-[131px] min-w-[131px]'>
        <img src={image} alt="Consult Card" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-[#0CC1E0]' />
        <p className='text-center font-medium text-sm md:text-base text-gray-600'>{title}</p>
      </div>
    </>
  )
}

export default ConsultDoctorCard;