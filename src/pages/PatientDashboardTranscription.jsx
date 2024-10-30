import { useState } from 'react';
import PatientHeaderSidebar from '../components/Patient/PatientHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';

function PatientDashboardTranscription() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };
  const tableheaders = ['Appointment ID', 'Date of Appointment', 'Time of Appointment', 'Patient Name', 'Doctor Name', 'Doctor Specialty', 'Appointment Type', 'Transcription'];
  return (
    <>
      <PatientHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Transcriptions</p>
          <i className="fa-solid fa-file-lines text-center text-xl md:text-2xl"></i>
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

      {isOverlayVisible ? (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleOverlay}
        >
          <div
            className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-2 md:mx-0 md:max-w-2xl w-full flex flex-col gap-3 h-[600px] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-xl font-semibold text-gray-800">Consultation Transcript</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleOverlay}
              >
                &times;
              </button>
            </div>

            {/* Patient & Doctor Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p><span className="font-semibold text-gray-700">Patient Name:</span> Ali Ahmed</p>
                <p><span className="font-semibold text-gray-700">MR Number:</span> MR-121</p>
                <p><span className="font-semibold text-gray-700">Consultation Date:</span> 20-10-2024</p>
              </div>
              <div>
                <p><span className="font-semibold text-gray-700">Doctor Name:</span> Dr. Khadeejah Ashraf</p>
                <p><span className="font-semibold text-gray-700">Specialty:</span> Cardiologist</p>
                <p><span className="font-semibold text-gray-700">Consultation Type:</span> In-Clinic</p>
              </div>
            </div>

            {/* Transcript Section */}
            <div className="border-t pt-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Consultation Transcript</h2>

              {/* Conversation Blocks */}
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p><span className="font-semibold text-gray-700">Speaker00:</span> "Hello [Patient Name], how have you been feeling lately?"</p>
                  <p><span className="font-semibold text-gray-700">Speaker01:</span> "I’ve been feeling a bit more tired than usual and having some headaches."</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p><span className="font-semibold text-gray-700">Speaker00:</span> "Have you noticed any other symptoms, like dizziness or chest pain?"</p>
                  <p><span className="font-semibold text-gray-700">Speaker01:</span> "No chest pain, but I sometimes feel dizzy in the mornings."</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p><span className="font-semibold text-gray-700">Speaker00:</span> "Based on your symptoms, it could be related to your blood pressure. I’d recommend monitoring it daily for the next week."</p>
                  <p><span className="font-semibold text-gray-700">Speaker00:</span> "Also, let’s arrange for a follow-up blood test to rule out any deficiencies."</p>
                </div>
              </div>
            </div>

            {/* End of Transcript */}
            <p className="text-center text-sm text-gray-500 mt-6">End of Transcript</p>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default PatientDashboardTranscription;