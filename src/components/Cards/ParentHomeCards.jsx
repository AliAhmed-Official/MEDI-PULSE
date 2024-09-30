import React from 'react';
import HomeCard from './HomeCard';

function ParentHomeCards() {
  return (
    <>
      <section className='mt-10 w-full flex flex-wrap justify-center content-start gap-4 px-6'>
        <HomeCard image="https://oladoc.com/dist/images/online-now-home-2x_compressed.webp" heading='Consult Online Now' description='Instantly connect with Specialists through Video call.' backColor='#E4F6F9' />

        <HomeCard image="https://oladoc.com/dist/images/home-appt-2xx_compressed.webp" heading='In Clinic Appointments' description="Book an In-Person visit to doctor's clinic." backColor='#FFF1DD' />
      </section>
    </>
  )
}

export default ParentHomeCards;