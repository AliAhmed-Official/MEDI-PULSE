import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DoctorListCard from '../components/Doctor/DoctorListCard';

function DoctorList() {
  return (
    <>
      <Header />
      <main className="w-full mb-10 md:flex md:justify-end md:px-5 md:mb-20 md:mt-10 ">
        <section className='w-full h-full md:flex md:flex-col md:items-center'>
          <DoctorListCard />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default DoctorList;