import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom';
import PatientDashboard from './pages/PatientDashboard';
import App from './App.jsx';
import './index.css';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/'>
//       <Route path='' element={<PatientDashboard />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
)