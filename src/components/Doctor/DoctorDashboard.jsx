import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHome from './DashboardHome';
import HeaderDoctor from './HeaderDoctor';
import DashboardSetting from './DashboardSetting';
import DashboardAppointment from './DashboardAppointment';
import PatientDetailCard from './PatientDetailCard';

function DoctorDashboard() {
  const [transformValue, setTransformValue] = useState('translateX(-240px)');
  const handleToggle = () => {
    setTransformValue((prev) =>
      prev === 'translateX(-240px)' ? 'translateX(0)' : 'translateX(-240px)'
    );
  };

  return (
    <>
      <HeaderDoctor togglebtn={handleToggle} />
      <Sidebar transformValue={transformValue} />
      <main className={`h-full flex ${transformValue === 'translateX(-240px)' ? 'lg:ml-0' : 'lg:ml-[240px]'}`}>

        {/* <DashboardHome cardGrow={transformValue} /> */}

        {/* <DashboardAppointment /> */}

        <PatientDetailCard />

        {/* <DashboardSetting /> */}

      </main>
    </>
  )
}

export default DoctorDashboard;