import { React, useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import OTP from './pages/OTP.jsx';
import VideoCall from './pages/VideoCall.jsx';
import JoinCall from './pages/JoinCall.jsx';
import DoctorReview from './pages/DoctorReview.jsx';
import ContactUs from './pages/ContactUs.jsx';
import DoctorList from './pages/DoctorList.jsx';
import DatesSlots from './pages/DatesSlots.jsx';
import PatientDetails from './pages/PatientDetails.jsx';
import Payment from './pages/Payment.jsx';
import PharmacyDashboard from './pages/PharmacyDashboard';
import PharmacyDashboardMedicineList from './pages/PharmacyDashboardMedicineList';
import PharmacyDashboardAddMedicine from './pages/PharmacyDashboardAddMedicine';
import PharmacyDashboardPrescriptionList from './pages/PharmacyDashboardPrescriptionList';
import PharmacyDashboardCart from './pages/PharmacyDashboardCart';
import PharmacyDashboardCheckout from './pages/PharmacyDashboardCheckout';
import PharmacyDashboardInvoice from './pages/PharmacyDashboardInvoice';
import PharmacyDashboardSettings from './pages/PharmacyDashboardSettings.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminDashboardDoctors from './pages/AdminDashboardDoctors.jsx';
import AdminDashboardStaff from './pages/AdminDashboardStaff.jsx';
import AdminDashboardDepartments from './pages/AdminDashboardDepartments.jsx';
import AdminDashboardEmergencySlots from './pages/AdminDashboardEmergencySlots.jsx';
import DoctorDashboard from './pages/DoctorDashboard.jsx';
import DoctorDashboardPastPrescriptions from './pages/DoctorDashboardPastPrescriptions.jsx';
import PatientDetailCard from './components/Doctor/PatientDetailCard.jsx';
import PatientDashboard from './pages/PatientDashboard.jsx';
import PatientDashboardPastAppointment from './pages/PatientDashboardPastAppointment.jsx';
import PatientDashboardTranscription from './pages/PatientDashboardTranscription.jsx';
import PatientDashboardSettings from './pages/PatientDashboardSettings.jsx';
import DoctorDashboardListAppointments from './pages/DoctorDashboardListAppointments.jsx';
import ReceptionistDashboard from './pages/ReceptionistDashboard.jsx';
import ReceptionistDashboardDoctors from './pages/ReceptionistDashboardDoctors.jsx';
import ReceptionistDashboardAppointments from './pages/ReceptionistDashboardAppointments.jsx';
import ReceptionistDashboardSettings from './pages/ReceptionistDashboardSettings.jsx';
import ConsultationInvoice from './components/ConsultationInvoice.jsx';
import FinanceDashboard from './pages/FinanceDashboard.jsx';
import FinanceDashboardConsultationInvoices from './pages/FinanceDashboardConsultationInvoices.jsx';
import FinanceDashboardMedicationInvoices from './pages/FinanceDashboardMedicationInvoices.jsx';
import FinanceDashboardSettings from './pages/FinanceDashboardSettings.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/pharmacy'>
        <Route path='' element={<PharmacyDashboard />} />
        <Route path='medicinelist' element={<PharmacyDashboardMedicineList />} />
        <Route path='prescriptionlist' element={<PharmacyDashboardPrescriptionList />} />
        <Route path='addmedicine' element={<PharmacyDashboardAddMedicine />} />
        <Route path='pharmacycart' element={<PharmacyDashboardCart />} />
        <Route path='pharmacycheckout' element={<PharmacyDashboardCheckout />} />
        <Route path='pharmacyinvoice' element={<PharmacyDashboardInvoice />} />
        <Route path='pharmacysettings' element={<PharmacyDashboardSettings />} />
      </Route>
      <Route path='/admin'>
        <Route path='' element={<AdminDashboard />} />
        <Route path='admindoctors' element={<AdminDashboardDoctors />} />
        <Route path='adminstaff' element={<AdminDashboardStaff />} />
        <Route path='admindepartment' element={<AdminDashboardDepartments />} />
        <Route path='adminemergencyslots' element={<AdminDashboardEmergencySlots />} />
      </Route>
      <Route path='/'>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='otp' element={<OTP />} />
        <Route path='doctors' element={<DoctorList />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='appointmentslotsdates' element={<DatesSlots />} />
        <Route path='patientdetails' element={<PatientDetails />} />
        <Route path='payment' element={<Payment />} />
        <Route path='joincall' element={<JoinCall />} />
        <Route path='videocall' element={<VideoCall />} />
        <Route path='doctorreview' element={<DoctorReview />} />
      </Route>
      <Route path='/doctordashboard'>
        <Route path='' element={<DoctorDashboard />} />
        <Route path='doctordashboardlistappointments' element={<DoctorDashboardListAppointments />} />
        <Route path='doctordashboardpastprescriptions' element={<DoctorDashboardPastPrescriptions />} />
        <Route path='doctordashboardpatientdetail' element={<PatientDetailCard />} />
      </Route>
      <Route path='/patientdashboard'>
        <Route path='' element={<PatientDashboard />} />
        <Route path='transcriptions' element={<PatientDashboardTranscription />} />
        <Route path='pastappointments' element={<PatientDashboardPastAppointment />} />
        <Route path='settings' element={<PatientDashboardSettings />} />
      </Route>
      <Route path='/receptionistdashboard'>
        <Route path='' element={<ReceptionistDashboard />} />
        <Route path='doctors' element={<ReceptionistDashboardDoctors />} />
        <Route path='appointments' element={<ReceptionistDashboardAppointments />} />
        <Route path='settings' element={<ReceptionistDashboardSettings />} />
        <Route path='appointments/consultationinvoice' element={<ConsultationInvoice />} />
      </Route>
      <Route path='/financedashboard'>
        <Route path='' element={<FinanceDashboard />} />
        <Route path='consultationinvoices' element={<FinanceDashboardConsultationInvoices />} />
        <Route path='medicationinvoices' element={<FinanceDashboardMedicationInvoices />} />
        <Route path='settings' element={<FinanceDashboardSettings />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </>
  )
}

export default App;