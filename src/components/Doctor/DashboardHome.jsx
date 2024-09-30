import React from 'react';
import DoctorDashboardCard from './DoctorDashboardCard';

function DashboardHome({ cardGrow }) {
  return (
    <>
      <section className='flex flex-col flex-grow mx-4 w-fit'>
        <div className='mt-5 text-xl space-x-2 text-gray-400 flex items-center'>
          <span className='font-medium'>Doctor Dashboard</span>
          <i className="fa-solid fa-house"></i>
        </div>
        <div className='flex flex-wrap justify-center md:justify-between gap-3 mt-10'>
          <DoctorDashboardCard mycardGrow={cardGrow} fromColor='#3A6177' toColor='#3A7AD2' cardIcon='fas fa-user-injured' cardTitle='Todays Patients' cardCount={231} />
          <DoctorDashboardCard mycardGrow={cardGrow} fromColor='#BC3665' toColor='#222771' cardIcon='fa-solid fa-calendar-check' cardTitle='Appointments' cardCount={122} />
          <DoctorDashboardCard mycardGrow={cardGrow} fromColor='#6EAF7F' toColor='#18535F' cardIcon='fa-sharp fa-solid fa-bed-pulse' cardTitle='Admitted Patients' cardCount={28} />
          <DoctorDashboardCard mycardGrow={cardGrow} fromColor='#A93576' toColor='#D28115' cardIcon='fa-solid fa-globe' cardTitle='Online Appointments' cardCount={42} />
        </div>
        {/* <div className='mt-10'>ds</div> */}
      </section>
    </>
  )
}

export default DashboardHome;