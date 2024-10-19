import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, ScrollRestoration } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import './index.css';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DoctorList from './pages/DoctorList.jsx';
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
      </Route>
      <Route path='/'>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='doctors' element={<DoctorList />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ['/doctors'];
          return paths.includes(location.pathname) ? location.pathname : location.key;
        }}
      />
    </RouterProvider>
  </StrictMode>,
);