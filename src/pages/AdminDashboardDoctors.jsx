import { React, useState } from 'react';
import AdminHeaderSidebar from '../components/Admin/AdminHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';
import FloatingInput from '../components/FloatingInput';

function AdminDashboardDoctors() {
  const [isOverlayVisible1, setOverlayVisible1] = useState(false);
  const toggleOverlay1 = () => {
    setOverlayVisible1(!isOverlayVisible1);
  };
  const [isOverlayVisible2, setOverlayVisible2] = useState(false);
  const toggleOverlay2 = () => {
    setOverlayVisible2(!isOverlayVisible2);
  };
  const [formData, setFormData] = useState({
    doctorName: '',
    doctoremail: '',
    doctormobile: '',
    doctorspecialization: '',
    doctordegree: '',
    doctorexperience: '',
    doctorconsultationfee: '',
    doctorrating: '',
    doctorsalary: '',
    doctorbankaccount: '',
    doctoravailability: ''
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const tableheaders = ['Name', 'Department', 'Specialization', 'Availability', 'Mobile', 'Degree', 'Experience (Years)', 'Consultation Fee', 'Salary', 'Bank Account', 'Email', 'Rating', 'Actions'];
  return (
    <>
      <AdminHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Doctors</p>
          <i className="fa-solid fa-user-doctor text-center text-xl md:text-2xl"></i>
        </div>

        <div className='m-5'>
          <TableSearchBar placeholderText="Search Doctor" overlaybtn={toggleOverlay1} />
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
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center gap-3">
                      <img src="/images/khadeejah.jpg" alt="Image" className="w-8 h-8 rounded-full" />
                      <p className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap">
                        Dr. Khadeejah Ashraf
                      </p>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">Cardiology</td>
                  <td className="py-2 px-4 border-b">Cardiologist</td>
                  <td className="py-2 px-4 border-b">Monday to Thursday</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-phone text-[#0cc1e0]"></i>  {'03222506206'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-graduation-cap text-black"></i>  MBBS, MD</td>
                  <td className="py-2 px-4 border-b">20</td>
                  <td className="py-2 px-4 border-b">800</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-money-bill text-lg text-green-500"></i>  111800</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-building-columns text-lg text-green-500"></i>  {'4020001123456702'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-regular fa-envelope text-lg text-red-500"></i>  {'aliahmedchamp@gmail.com'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-star text-yellow-500"></i>  0.0</td>
                  <td className="py-2 px-4 border-b text-lg">
                    <div className='flex items-center gap-2'>
                      <i className="fa-regular fa-pen-to-square text-[#0cc1e0] p-2 hover:bg-[#DAE1F3] rounded-full"></i><i className="fa-solid fa-trash-can text-red-500 p-2 hover:bg-[#DAE1F3] rounded-full"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div >
        </div>
      </main>

      {/* Add Doctor Overlay */}
      {isOverlayVisible1 ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay1}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-3 md:mx-0 md:max-w-3xl w-full h-[330px] md:h-[500px] flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-2xl text-end" onClick={toggleOverlay1}></i>

            <div className='mt-5 flex justify-center'>
              <img src="/images/me.jpeg" alt="Doctor Image" className='w-20 h-20 rounded-xl ' />
            </div>

            <form className='mt-5 md:mx-5 grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-2'>
              <FloatingInput
                label="Doctor Name*"
                id="doctorName"
                value={formData.doctorName}
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <select name="" id="" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]'>
                  <option value="">Department</option>
                </select>
              </div>
              <FloatingInput
                label="Specialization*"
                id="doctorspecialization"
                value={formData.doctorspecialization}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Email*"
                id="doctoremail"
                value={formData.doctoremail}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Mobile*"
                id="doctormobile"
                value={formData.doctormobile}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Degree*"
                id="doctordegree"
                value={formData.doctordegree}
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <input type="date" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]' />
              </div>
              <FloatingInput
                label="Experience*"
                id="doctorexperience"
                value={formData.doctorexperience}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Consultation Fee*"
                id="doctorconsultationfee"
                value={formData.doctorconsultationfee}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Availability*"
                id="doctoravailability"
                value={formData.doctoravailability}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Salary*"
                id="doctorsalary"
                value={formData.doctorsalary}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Back Account*"
                id="doctorbankaccount"
                value={formData.doctorbankaccount}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Rating*"
                id="doctorrating"
                value={formData.doctorrating}
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <input type="file" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]' />
              </div>
              <button className='p-2 bg-[#1469C0]'>Save</button>
            </form>

          </div>
        </div>
        : null}

      {/* Update Doctor Overlay */}
      {isOverlayVisible2 ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay2}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-3 md:mx-0 md:max-w-2xl w-full h-[330px] md:h-[500px] flex flex-col" onClick={(e) => e.stopPropagation()}>



          </div>
        </div>
        : null}
    </>
  )
}

export default AdminDashboardDoctors;