import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Main/Hero/Hero';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OTP from './pages/OTP';
import DoctorList from './pages/DoctorList';
import Home from './pages/Home';
import PatientDashboard from './pages/PatientDashboard';
import PatientDashboardBookAppointment from './pages/PatientDashboardBookAppointment';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* <DoctorDashboard /> */}
      {/* <Hero /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <OTP /> */}
      {/* <DoctorList /> */}
      {/* <PatientDashboard /> */}
      <PatientDashboardBookAppointment />
    </>
  )
}

export default App;