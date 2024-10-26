import { React, useState } from 'react';
import AdminHeaderSidebar from '../components/Admin/AdminHeaderSidebar';
import TableSearchBar from '../components/TableSearchbar';
import FloatingInput from '../components/FloatingInput';
import UpdateFloatingInput from '../components/UpdateFloatingInput';

function AdminDashboardDepartments() {
  const [isOverlayVisible1, setOverlayVisible1] = useState(false);
  const toggleOverlay1 = () => {
    setOverlayVisible1(!isOverlayVisible1);
  };
  const [isOverlayVisible2, setOverlayVisible2] = useState(false);
  const toggleOverlay2 = () => {
    setOverlayVisible2(!isOverlayVisible2);
  };
  const [formData, setFormData] = useState({
    departmentname: '',
    departmentdescription: '',
    departmentdate: '',
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const tableheaders = ['Department Name', 'Description', 'Date', 'Actions'];
  return (
    <>
      <AdminHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Departments</p>
          <i className="fa-solid fa-hospital text-center text-xl md:text-2xl"></i>
        </div>

        <div className='m-5'>
          <TableSearchBar placeholderText="Search Department" overlaybtn={toggleOverlay1} />
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
                  <td className="py-2 px-4 border-b">Cardiology</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">{'This department'.substring(0, 5) + '...'}</td>
                  <td className="py-2 px-4 border-b">20/10/2024</td>
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

      {/* Add Department Overlay */}
      {isOverlayVisible1 ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay1}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-3 lg:mx-0 md:max-w-3xl w-full h-[330px] md:h-[350px] flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-xl sm:text-2xl md:text-3xl text-gray-500'>Add Department</p>
              <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-2xl text-end" onClick={toggleOverlay1}></i>
            </div>

            <form className='mt-5 md:mx-5 grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-2'>
              <FloatingInput
                label="Department Name*"
                id="departmentname"
                value={formData.departmentname}
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <input type="date" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]' />
              </div>
              <div className="relative z-0 w-full mb-2 group">
                <textarea name="" id="" cols="30" rows="5" placeholder='Description' className='py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]'></textarea>
              </div>
              <div className='invisible'></div>
              <div className='flex md:block justify-center items-center'>
                <button className='p-2 bg-[#0cc1e0] text-white font-semibold rounded-sm w-32'>Save</button>
              </div>
            </form>
          </div>
        </div>
        : null}

      {/* Update Department Overlay */}
      {isOverlayVisible2 ?
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleOverlay2}>
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg mx-3 lg:mx-0 md:max-w-3xl w-full h-[330px] md:h-[350px] flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-xl sm:text-2xl md:text-3xl text-gray-500'>Update Department</p>
              <i className="fa-solid fa-xmark text-gray-500 cursor-pointer text-2xl text-end" onClick={toggleOverlay2}></i>
            </div>

            <form className='mt-5 md:mx-5 grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-2'>
              <UpdateFloatingInput
                label="Department Name*"
                id="departmentname"
                value='Cardiology'
                onChange={handleInputChange}
                type='text'
              />
              <div className="relative z-0 w-full mb-2 group">
                <input type="date" className='block py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]' />
              </div>
              <div className="relative z-0 w-full mb-2 group">
                <textarea name="" id="" cols="30" rows="5" placeholder='Description' className='py-2.5 px-3 w-full text-sm bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0]' value='This is a cardiology department'></textarea>
              </div>
              <div className='invisible'></div>
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

export default AdminDashboardDepartments;