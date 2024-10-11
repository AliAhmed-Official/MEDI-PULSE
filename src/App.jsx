import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorDashboardListAppointments from './pages/DoctorDashboardListAppointments';
import DoctorDashboardPatientDetail from './pages/DoctorDashboardPatientDetail';
import PharmacyDashboard from './pages/PharmacyDashboard';
import PharmacyDashboardMedicineList from './pages/PharmacyDashboardMedicineList';
import PharmacyDashboardAddMedicine from './pages/PharmacyDashboardAddMedicine';
import PharmacyDashboardPrescriptionList from './pages/PharmacyDashboardPrescriptionList';
import PharmacyDashboardCart from './pages/PharmacyDashboardCart';
import PharmacyDashboardCheckout from './pages/PharmacyDashboardCheckout';
import PharmacyDashboardInvoice from './pages/PharmacyDashboardInvoice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Test from './pages/Test';
import PatientDetailCard from './components/Doctor/PatientDetailCard';

function App() {
  return (
    <>
      {/* <Test /> */}
      {/* <DoctorDashboard /> */}
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <OTP /> */}
      {/* <DoctorList /> */}
      {/* <PatientDashboard /> */}
      {/* <PatientDashboardBookAppointment /> */}
      {/* <PatientDashboardPastAppointment /> */}
      {/* <PatientDashboardPrescription /> */}
      {/* <PatientDashboardSettings /> */}
      {/* <DoctorDashboard /> */}
      {/* <DoctorDashboardListAppointments /> */}
      {/* <DoctorDashboardPatientDetail /> */}
      {/* <PharmacyDashboard /> */}
      {/* <PharmacyDashboardMedicineList /> */}
      {/* <PharmacyDashboardAddMedicine /> */}
      {/* <PharmacyDashboardPrescriptionList /> */}
      <PharmacyDashboardCart />
      {/* <PharmacyDashboardCheckout /> */}
      {/* <PharmacyDashboardInvoice /> */}
    </>
  )
}

export default App;