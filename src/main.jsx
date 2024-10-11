import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom';
import PatientDashboard from './pages/PatientDashboard';
import App from './App.jsx';
import './index.css';

import PharmacyDashboard from './pages/PharmacyDashboard';
import PharmacyDashboardMedicineList from './pages/PharmacyDashboardMedicineList';
import PharmacyDashboardAddMedicine from './pages/PharmacyDashboardAddMedicine';
import PharmacyDashboardPrescriptionList from './pages/PharmacyDashboardPrescriptionList';
import PharmacyDashboardCart from './pages/PharmacyDashboardCart';
import PharmacyDashboardCheckout from './pages/PharmacyDashboardCheckout';
import PharmacyDashboardInvoice from './pages/PharmacyDashboardInvoice';
import PharmacyDashboardSettings from './pages/PharmacyDashboardSettings.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/pharmacy'>
      <Route path='' element={<PharmacyDashboard />} />
      <Route path='medicinelist' element={<PharmacyDashboardMedicineList />} />
      <Route path='prescriptionlist' element={<PharmacyDashboardPrescriptionList />} />
      <Route path='addmedicine' element={<PharmacyDashboardAddMedicine />} />
      <Route path='addmedicine' element={<PharmacyDashboardAddMedicine />} />
      <Route path='pharmacycart' element={<PharmacyDashboardCart />} />
      <Route path='pharmacycheckout' element={<PharmacyDashboardCheckout />} />
      <Route path='pharmacyinvoice' element={<PharmacyDashboardInvoice />} />
      <Route path='pharmacysettings' element={<PharmacyDashboardSettings />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)