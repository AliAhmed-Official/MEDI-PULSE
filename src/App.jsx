import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OTP from './pages/OTP';
import DoctorList from './pages/DoctorList';
import Home from './pages/Home';
import PatientDashboard from './pages/PatientDashboard';
import PatientDashboardBookAppointment from './pages/PatientDashboardBookAppointment';
import PatientDashboardPastAppointment from './pages/PatientDashboardPastAppointment';
import PatientDashboardPrescription from './pages/PatientDashboardPrescription';
import PatientDashboardSettings from './pages/PatientDashboardSettings';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Test from './pages/Test';

function App() {
  return (
    <>
      {/* <Test /> */}
      {/* <DoctorDashboard /> */}
      {/* <Hero /> */}
      <Home />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <OTP /> */}
      {/* <DoctorList /> */}
      {/* <PatientDashboard /> */}
      {/* <PatientDashboardBookAppointment /> */}
      {/* <PatientDashboardPastAppointment /> */}
      {/* <PatientDashboardPrescription /> */}
      {/* <PatientDashboardSettings /> */}
    </>
  )
}

export default App;