import React from 'react';

function DoctorDashboardCard({ fromColor, toColor, cardTitle, cardIcon, cardCount, mycardGrow }) {
  return (
    <div
      className={`w-60 max-w-80 h-36 rounded-md text-white flex flex-col px-4 py-3 gap-2 justify-center ${mycardGrow === 'translateX(-240px)' ? 'lg:flex-grow' : ''}`}
      style={{ background: `linear-gradient(to right, ${fromColor}, ${toColor})` }}
    >
      <h4 className='font-semibold text-sm md:text-lg'>{cardTitle}</h4>
      <div className='flex items-center text-2xl md:text-3xl'>
        <i className={`${cardIcon}`}></i>
        <h3 className='flex-grow text-right text-base md:text-3xl'>{cardCount}</h3>
      </div>
    </div>
  );
}

export default DoctorDashboardCard;
