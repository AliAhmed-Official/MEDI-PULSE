import { useState } from 'react';
import DoctorHeaderSidebar from '../components/Doctor/DoctorHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';

function DoctorDashboardPastPrescriptions() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };
  const tableheaders = ['Appointment ID', 'Date of Appointment', 'Time of Appointment', 'Patient Name', 'Doctor Name', 'Doctor Specialty', 'Appointment Type', 'Prescription',];
  return (
    <>
      <DoctorHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Past Prescriptions</p>
          <i className="fa-solid fa-pills text-center text-xl md:text-2xl"></i>
        </div>

        <div className='m-5'>
          <TableSearchBar placeholderText="Search Appointment" type='hidden' rightButtons='hidden' />
          <div className='overflow-x-auto tablescroll'>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-left">
                  <th className="py-3 px-4 font-medium"><input type="checkbox" name="" /></th>
                  {tableheaders.map((value, index) => (
                    <th className="py-3 px-4 font-medium" key={index}>{value}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="hover:bg-gray-100 cursor-pointer">
                  <td className="py-2 px-4 border-b"><input type="checkbox" name="" id="" /></td>
                  <td className="py-2 px-4 border-b">APPT-1001</td>
                  <td className="py-2 px-4 border-b">20/10/2024</td>
                  <td className="py-2 px-4 border-b">12:00PM</td>
                  <td className="py-2 px-4 border-b">Ali Ahmed</td>
                  <td className="py-2 px-4 border-b">Dr. Khadeejah Ashraf</td>
                  <td className="py-2 px-4 border-b">Cardiologist</td>
                  <td className="py-2 px-4 border-b">In-Clinic</td>
                  <td className="py-2 px-4 border-b text-lg">
                    <div className='flex justify-around text-lg'>
                      <i className="fa-solid fa-eye text-[#4BA650] cursor-pointer" onClick={toggleOverlay}></i>
                      <i className="fa-solid fa-cloud-arrow-down text-[#6B42B8] cursor-pointer"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div >
        </div>
      </main >

      {isOverlayVisible ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-2 md:mx-0 md:max-w-2xl w-full flex flex-col gap-3 h-[600px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>

            <div className='flex justify-between items-center'>
              <img src="/public/images/logo.png" alt="Logo" className='w-16 h-12 lg:w-24 lg:h-16' />
              <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-xl" onClick={toggleOverlay}></i>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg lg:text-2xl p-1 text-center bg-slate-300'>Patient Details</p>
              <div className='flex items-center gap-2'>
                <img src="/public/images/me.jpeg" alt="Patient Image" className='w-12 h-12 rounded-full' />
                <div className='flex flex-col text-xs lg:text-sm'>
                  <p><span className='font-medium'>Patient Name:</span> Ali Ahmed</p>
                  <p><span className='font-medium'>Age:</span> 22</p>
                  <p><span className='font-medium'>Gender:</span> M</p>
                  <p><span className='font-medium'>Contact:</span> 03222506206</p>
                </div>
              </div>

            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg lg:text-2xl p-1 text-center bg-slate-300'>Prescription Details</p>
              <div className='flex items-center gap-2'>
                <i className="fa-solid fa-file-medical w-12 text-4xl text-center text-[#0cc1e0]"></i>
                <div className='flex flex-col text-xs lg:text-sm'>
                  <p><span className='font-medium'>Doctor ID:</span> 1232</p>
                  <p><span className='font-medium'>Doctor Name:</span> Dr. Khadeejah Ashraf</p>
                  <p><span className='font-medium'>Date of Prescription:</span> 10/10/2024</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg lg:text-2xl p-1 text-center bg-slate-300'>Medicines Details</p>
              <div className='flex justify-between border-b-2 pb-2'>
                <div className='text-xs lg:text-sm'>
                  <p><span className='font-medium'>Medicine Name:</span> Augmentin</p>
                  <p><span className='font-medium'>Dosage:</span> 250 mg</p>
                  <p><span className='font-medium'>Frequency:</span> once daily</p>
                  <p><span className='font-medium'>Duration:</span> 2 weeks</p>
                  <p><span className='font-medium'>Note:</span> Take with milk</p>
                </div>
              </div>

              <div className='flex justify-between border-b-2 pb-2'>
                <div className='text-xs lg:text-sm'>
                  <p><span className='font-medium'>Medicine Name:</span> Augmentin</p>
                  <p><span className='font-medium'>Dosage:</span> 250 mg</p>
                  <p><span className='font-medium'>Frequency:</span> once daily</p>
                  <p><span className='font-medium'>Duration:</span> 2 weeks</p>
                  <p><span className='font-medium'>Note:</span> Take with milk</p>
                </div>
              </div>
            </div>

            <div className='flex justify-center gap-4 items-center'>
              <p className='bg-[#0cc1e0] p-2 text-white font-semibold cursor-pointer rounded-md'>Prescribe Again</p>
            </div>

          </div>
        </div>
        : null}
    </>
  )
}

export default DoctorDashboardPastPrescriptions;