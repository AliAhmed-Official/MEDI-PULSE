import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DoctorListCard from '../components/Doctor/DoctorListCard';

function DoctorList() {
  return (
    <>
      <Header />
      <main className="mb-10 md:px-5 md:mb-20 md:mt-10">
        <section className='flex sm:justify-center gap-3 m-5 md:m-0 md:mb-5   overflow-x-auto availabledates'>


          <div className='p-1 px-3 min-w-fit md:p-2 md:px-7 rounded-3xl border-2 border-[#0cc1e0] text-[#0cc1e0] font-semibold cursor-pointer text-sm md:text-base'>
            <p>Most Experienced</p>
          </div>

          <div className='p-1 px-3 min-w-fit md:p-2 md:px-7 rounded-3xl border-2 border-[#0cc1e0] text-[#0cc1e0] font-semibold cursor-pointer text-sm md:text-base'>
            <p>Female Doctor</p>
          </div>

          <div className='p-1 px-3 min-w-fit md:p-2 md:px-7 rounded-3xl border-2 border-[#0cc1e0] text-[#0cc1e0] font-semibold cursor-pointer text-sm md:text-base'>
            <p>Highest Rated</p>
          </div>

          <div className='p-1 px-3 min-w-fit md:p-2 md:px-7 rounded-3xl border-2 border-[#0cc1e0] text-[#0cc1e0] font-semibold cursor-pointer text-sm md:text-base'>
            <p>Available Today</p>
          </div>





        </section>
        <section className='md:flex md:flex-col md:items-center'>
          <DoctorListCard />
          <DoctorListCard />
          <DoctorListCard />
          <DoctorListCard />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default DoctorList;