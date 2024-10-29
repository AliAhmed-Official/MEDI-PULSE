import { React, useState } from 'react';

function DoctorDashboardPatientDetail() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isprofileDropMenuOpen, setProfileDropMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState('translate-x-[-100%]');
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setProfileDropMenuOpen(false);
    setIsSidebarOpen('translate-x-[-100%]');
  }
  const toggleProfileDropMenu = () => {
    setProfileDropMenuOpen((prev) => !prev);
  }
  const toggleSidebar = () => {
    if (isMenuOpen == true) return;
    setIsSidebarOpen((prev) => {
      return prev == 'translate-x-[-100%]' ? 'translate-x-0' : 'translate-x-[-100%]';
    });
  }

  const [isFlipped, setIsFlipped] = useState(false);
  const [rows, setRows] = useState([{ medicineName: '', dosage: '', note: '' }]);
  const addRow = () => {
    setRows([...rows, { medicineName: '', dosage: '', note: '' }]);
  };
  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };
  return (
    <>
      <header className='fixed w-full z-40 bg-white'>
        <nav className={`h-[60px] flex justify-between items-center px-5 ${isMenuOpen ? '' : 'shadow-md'}`}>
          <div className='md:flex md:items-center md:gap-10 lg:relative lg:left-16'>
            <i className="fa-solid fa-bars text-xl cursor-pointer lg:hidden" onClick={toggleSidebar}></i>
            <img src="/public/images/logo.png" alt="Logo" className='w-24 h-full hidden md:block' />
          </div>

          <img src="/public/images/logo.png" alt="Logo" className='w-24 h-full md:hidden' />
          <i className="fa-solid fa-arrow-right-arrow-left fa-rotate-90 text-xl md:hidden" onClick={toggleMenu}></i>

          <div className='hidden md:flex md:items-center md:font-medium md:text-[15px] md:gap-1'>
            <div class="relative hover:bg-[#EBF2FA] md:p-1 md:px-2 md:rounded-full md:cursor-pointer">
              <i class="fa-regular fa-bell md:text-xl"></i>
              <p class="absolute top-0 right-0 w-4 h-4 text-xs rounded-full bg-red-500 flex items-center justify-center text-white">1</p>
            </div>

            <div className='md:flex md:items-center md:gap-5 md:p-1 md:px-2 hover:bg-[#EBF2FA] md:cursor-pointer md:rounded-3xl' onClick={toggleProfileDropMenu}>
              <p className='text-gray-500'>Ali Ahmed</p>
              <img src="/public/images/me.jpeg" alt="Profile Image" className='md:w-9 md:h-9 md:rounded-full' />
            </div>
          </div>
        </nav>

        <div className={`p-2 pb-0 pt-3 md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
          <div className='flex items-center justify-end font-medium text-[15px] gap-1'>
            <div className='hover:bg-[#EBF2FA] p-1 px-2 rounded-full cursor-pointer relative'>
              <i className="fa-regular fa-bell text-xl"></i>
              <p class="absolute top-0 right-0 w-4 h-4 text-xs rounded-full bg-red-500 flex items-center justify-center text-white">1</p>
            </div>
            <div className='flex items-center gap-5 p-1 px-2 hover:bg-[#EBF2FA] cursor-pointer rounded-3xl' onClick={toggleProfileDropMenu}>
              <p className='text-gray-500'>Ali Ahmed</p>
              <img src="/public/images/me.jpeg" alt="Profile Image" className='w-9 h-9 rounded-full' />
            </div>
          </div>
        </div>

        <div className={`absolute right-3 top-[116px] md:top-[60px] ${isprofileDropMenuOpen ? '' : 'hidden'}`}>
          <div className='bg-[#EFEDF1] w-52 p-3 flex flex-col gap-5'>
            <div className='flex items-center gap-3 cursor-pointer'>
              <i className="fa-solid fa-gear w-3"></i>
              <p>Settings</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer'>
              <i className="fa-solid fa-right-from-bracket w-3"></i>
              <p>Logout</p>
            </div>
          </div>
        </div>

      </header>
      <DoctorDashboardSidebar sidebarOpen={isSidebarOpen} />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] h-screen'>
        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-chevron-right text-sm"></i></p>
          <p className='text-xl md:text-2xl font-semibold'>Patient Detail</p>
        </div>

        <div className="h-[550px] lg:h-[520px] rounded-xl shadow-full overflow-hidden relative my-5 mx-3">
          <div id="boxContent" className="relative w-full h-full bg-white" style={{ transformStyle: 'preserve-3d', transition: 'transform 0.5s', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>

            {/* Front Card */}
            <div id="frontCard" className="absolute w-full p-3" style={{
              transform: 'rotateY(0deg)', backfaceVisibility: 'hidden'
            }}>

              <div className='flex border-b-2 border-gray-200 pb-2'>
                <div className='flex gap-2 items-center'>
                  <img src="/public/images/alishbah.jpg" alt="Patient image" className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full' />
                  <div className='text-xs sm:text-base lg:text-lg'>
                    <p><span className='font-medium'>Name:</span> Alishbah Shapater</p>
                    <p><span className='font-medium'>Gender:</span> F</p>
                    <p><span className='font-medium'>Age:</span> 12</p>
                    <p><span className='font-medium'>Phone:</span> 03222506206</p>
                  </div>
                </div>
                <div className='flex-grow flex justify-end items-center'>
                  <img src="/public/images/logo.png" alt="Logo" className='w-20 h-16 sm:w-32 sm:h-24' />
                </div>
              </div>

              <div className='mt-3'>
                <div className='flex flex-col gap-3'>

                  <div className='flex flex-col gap-2'>

                    <div className='flex items-center gap-1'>
                      <i className="fa-solid fa-heart-pulse text-xl w-5 text-red-500"></i>
                      <p className='text-gray-600 font-semibold'>Heart Rate Report</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-1'>
                        <label className='text-xs'>Resting Heart Rate:</label>
                        <input type="text" placeholder='Resting Heart Rate' className='flex-grow p-1 border-2 rounded-md focus:outline-none appearance-none focus:shadow-[#0CC1E0]' readOnly />
                      </div>

                      <div className='flex items-center gap-1'>
                        <label className='text-xs'>Continuous Heart Rate:</label>
                        <input type="text" placeholder='Continuous Heart Rate' className='flex-grow p-1 border-2 rounded-md focus:outline-none appearance-none focus:shadow-[#0CC1E0]' readOnly />
                      </div>

                      <div className='flex items-center gap-1'>
                        <label className='text-xs'>Cardio Fitness Score:</label>
                        <input type="text" placeholder='Cardio Fitness Score' className='flex-grow p-1 border-2 rounded-md focus:outline-none appearance-none focus:shadow-[#0CC1E0]' readOnly />
                      </div>
                    </div>

                    <div className='flex items-center gap-1'>
                      <i className="fa-solid fa-droplet text-xl w-5 text-red-500"></i>
                      <p className='text-gray-600 font-semibold'>Oxygen Saturation Report</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-1'>
                        <label className='text-xs'>Oxygen Saturation:</label>
                        <input type="text" placeholder='Oxygen Saturation' className='flex-grow p-1 border-2 rounded-md focus:outline-none appearance-none focus:shadow-[#0CC1E0]' readOnly />
                      </div>
                    </div>

                  </div>

                </div>
                {/* <div>sas</div> */}
              </div>

              {/* <button onClick={() => setIsFlipped(!isFlipped)}>Click</button> */}
            </div>

            {/* Back Card */}
            <div id="backCard" className="absolute w-full h-full overflow-y-auto" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Medicine Name</th>
                    <th className="py-2 px-4 border-b">Dosage</th>
                    <th className="py-2 px-4 border-b">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={row.medicineName}
                          onChange={(e) => handleInputChange(index, 'medicineName', e.target.value)}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={row.dosage}
                          onChange={(e) => handleInputChange(index, 'dosage', e.target.value)}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={row.note}
                          onChange={(e) => handleInputChange(index, 'note', e.target.value)}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center mt-4">
                <button onClick={addRow} className="flex items-center justify-center p-2 text-gray-500 border-dashed border-2 border-gray-500">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>

              <div className='flex mt-7 lg:mt-5 mb-5 justify-center lg:justify-end lg:mr-5 gap-10 '>
                <button id="voiceRecorderBtn" class="w-9 lg:w-12 h-9 lg:h-12 bg-red-500 text-white rounded-full flex justify-center items-center hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none relative">
                  <i class="fa-solid fa-microphone lg:fa-lg"></i>
                  <span id="pulseEffect" class="absolute w-full h-full rounded-full bg-red-400 opacity-75 scale-125 hidden animate-ping"></span>
                </button>
                <button className='lg:py-2 p-1 px-3 bg-[#0CC1E0] text-white space-x-2 rounded-2xl hover:bg-gray-400 hover:text-black' onClick={() => setIsFlipped(!isFlipped)}><span className='text-sm lg:text-base'>Patient Details</span></button>
                <button className='lg:py-2 p-1 px-3 bg-yellow-500 text-white space-x-2 rounded-2xl hover:bg-gray-400 hover:text-black'><span className='text-sm lg:text-base'>Admit</span></button>
                <button className='lg:py-2 p-1 px-3 bg-green-500 text-white space-x-2 rounded-2xl hover:bg-gray-400 hover:text-black'><span className='text-sm lg:text-base'>Done</span></button>
              </div>
            </div>

          </div>
        </div>

      </main>
    </>
  )
}

export default DoctorDashboardPatientDetail;