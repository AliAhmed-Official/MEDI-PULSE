import { React, useState } from 'react';
import AdminHeaderSidebar from '../components/Admin/AdminHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';
import FloatingInput from '../components/FloatingInput';
import UpdateFloatingInput from '../components/UpdateFloatingInput';

function AdminDashboardStaff() {
  const [isOverlayVisible1, setOverlayVisible1] = useState(false);
  const toggleOverlay1 = () => {
    setOverlayVisible1(!isOverlayVisible1);
  };
  const [isOverlayVisible2, setOverlayVisible2] = useState(false);
  const toggleOverlay2 = () => {
    setOverlayVisible2(!isOverlayVisible2);
  };
  const [formData, setFormData] = useState({
    staffname: '',
    staffemail: '',
    staffmobile: '',
    staffgender: '',
    staffexperience: '',
    staffdateofjoining: '',
    staffdesignation: '',
    staffaddress: '',
    staffshift: '',
    staffusername: '',
    staffpassword: '',
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const tableheaders = ['Name', 'Gender', 'Designation', 'Mobile', 'Date of Joining', 'Address', 'Experience (Years)', 'Shift', 'Email', 'User Name', 'Password', 'Actions'];
  return (
    <>
      <AdminHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Staff</p>
          <i className="fa-solid fa-users text-center text-xl md:text-2xl"></i>
        </div>

        <div className='m-5'>
          <TableSearchBar placeholderText="Search Staff Member" overlaybtn={toggleOverlay1} />
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
                        Aqsa Shahid
                      </p>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b"><p className='bg-[#D4CFE5] p-1 px-2 rounded-md text-[#7E57C6] font-semibold'>Female</p></td>
                  <td className="py-2 px-4 border-b">Receptionist</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-phone text-[#0cc1e0]"></i>  {'03222506206'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b">20/10/2024</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-solid fa-location-dot text-red-500"></i>  {'Serena Tower'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">Morning</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap"><i className="fa-regular fa-envelope text-lg text-red-500"></i>  {'aqsa@gmail.com'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b">aqsa</td>
                  <td className="py-2 px-4 border-b">aqsa123</td>
                  <td className="py-2 px-4 border-b text-lg">
                    <div className='flex items-center gap-2'>
                      <i className="fa-regular fa-pen-to-square text-[#0cc1e0] p-2 hover:bg-[#DAE1F3] rounded-full" onClick={toggleOverlay2}></i><i className="fa-solid fa-trash-can text-red-500 p-2 hover:bg-[#DAE1F3] rounded-full"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div >
        </div>
      </main>

      {/* Add Staff Overlay */}
      {isOverlayVisible1 ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay1}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-3 lg:mx-0 md:max-w-3xl w-full h-[330px] md:h-[500px] flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-xl sm:text-2xl md:text-3xl text-gray-500'>Add Staff Member</p>
              <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-2xl text-end" onClick={toggleOverlay1}></i>
            </div>

            <div className='mt-5 flex justify-center'>
              <img src="/images/me.jpeg" alt="Staff Member Image" className='w-20 h-20 rounded-xl ' />
            </div>

            <form className='mt-5 md:mx-5 grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-2'>
              <FloatingInput
                label="Staff Member Name*"
                id="staffname"
                value={formData.staffname}
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <select name="" id="" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]'>
                  <option value="">Gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
              <div className="relative z-0 w-full mb-2 group">
                <select name="" id="" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]'>
                  <option value="">Designation</option>
                  <option value="">Receptionist</option>
                  <option value="">Pharmacist</option>
                  <option value="">Financier</option>
                </select>
              </div>
              <FloatingInput
                label="Mobile*"
                id="staffmobile"
                value={formData.staffmobile}
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <input type="date" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]' />
              </div>
              <FloatingInput
                label="Address*"
                id="staffaddress"
                value={formData.staffaddress}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Experience*"
                id="staffexperience"
                value={formData.staffexperience}
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <select name="" id="" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]'>
                  <option value="">Shift</option>
                  <option value="">Morning</option>
                  <option value="">Afternoon</option>
                  <option value="">Evening</option>
                  <option value="">Night</option>
                </select>
              </div>
              <FloatingInput
                label="Email*"
                id="staffemail"
                value={formData.staffemail}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="User Name*"
                id="staffusername"
                value={formData.staffusername}
                onChange={handleInputChange}
                type='text'
              />
              <FloatingInput
                label="Password*"
                id="staffpassword"
                value={formData.staffpassword}
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <input type="file" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]' />
              </div>
              <div className='flex md:block justify-center items-center'>
                <button className='p-2 bg-[#0cc1e0] text-white font-semibold rounded-sm w-32'>Save</button>
              </div>
            </form>
          </div>
        </div>
        : null}

      {/* Update Staff Overlay */}
      {isOverlayVisible2 ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay2}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-3 lg:mx-0 md:max-w-3xl w-full h-[330px] md:h-[500px] flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-xl sm:text-2xl md:text-3xl text-gray-500'>Update Staff Member</p>
              <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-2xl text-end" onClick={toggleOverlay2}></i>
            </div>

            <div className='mt-5 flex justify-center'>
              <img src="/images/me.jpeg" alt="Staff Member Image" className='w-20 h-20 rounded-xl ' />
            </div>

            <form className='mt-5 md:mx-5 grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-2'>
              <UpdateFloatingInput
                label="Staff Member Name*"
                id="staffname"
                value='Aqsa Shahid'
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <select name="" id="" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]'>
                  <option value="">Gender</option>
                  <option value="">Male</option>
                  <option value="" selected>Female</option>
                </select>
              </div>
              <div className="relative z-0 w-full mb-2 group">
                <select name="" id="" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]'>
                  <option value="">Designation</option>
                  <option value="" selected>Receptionist</option>
                  <option value="">Pharmacist</option>
                  <option value="">Financier</option>
                </select>
              </div>
              <UpdateFloatingInput
                label="Mobile*"
                id="staffmobile"
                value='03222506206'
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <input type="date" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]' />
              </div>
              <UpdateFloatingInput
                label="Address*"
                id="staffaddress"
                value='Serena Tower'
                onChange={handleInputChange}
                type='text'
              />
              <UpdateFloatingInput
                label="Experience*"
                id="staffexperience"
                value='2'
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <select name="" id="" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]'>
                  <option value="">Shift</option>
                  <option value="" selected>Morning</option>
                  <option value="">Afternoon</option>
                  <option value="">Evening</option>
                  <option value="">Night</option>
                </select>
              </div>
              <UpdateFloatingInput
                label="Email*"
                id="staffemail"
                value='aqsa@gmail.com'
                onChange={handleInputChange}
                type='text'
              />
              <UpdateFloatingInput
                label="User Name*"
                id="staffusername"
                value='aqsa'
                onChange={handleInputChange}
                type='text'
              />
              <UpdateFloatingInput
                label="Password*"
                id="staffpassword"
                value='aqsa123'
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <input type="file" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]' />
              </div>
              <div className='flex md:block justify-center items-center'>
                <button className='p-2 bg-[#0cc1e0] text-white font-semibold rounded-sm w-32'>Save</button>
              </div>
            </form>
          </div>
        </div>
        : null}
    </>
  )
}

export default AdminDashboardStaff;