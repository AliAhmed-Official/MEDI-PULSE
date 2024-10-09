import React, { useState } from 'react';

function PatientDetailCard() {
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
      <div className=" h-[550px] lg:h-[520px] rounded-xl shadow-full m-2 overflow-hidden relative">
        <div
          id="boxContent"
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front Card */}
          <div id="frontCard" className="absolute w-full h-full" style={{
            transform: 'rotateY(0deg)', backfaceVisibility: 'hidden'
          }}>
            <div className='flex rounded-t-xl px-3 border-b-2 border-solid border-gray-300'>
              <img src="/public/images/male avatar.jpg" alt="Patient Image" className='lg:w-32 lg:h-32 rounded-tl-xl w-20 h-20' />
              <div className='pt-1 lg:pt-3 flex-grow rounded-tr-xl text-sm lg:text-lg text-gray-500'>
                <p className='pl-3'><span className='font-medium'>Patient Name:</span> Ali Ahmed</p>
                <p className='pl-3'><span className='font-medium'>Age:</span> 21</p>
                <p className='pl-3'><span className='font-medium'>Patient Gender:</span> M</p>
                <p className='pl-3'><span className='font-medium'>Contact:</span> 03222506206</p>
              </div>
            </div>

            <div className='lg:px-8 py-4 space-y-9 lg:space-y-5 px-5'>
              <div className='flex items-center lg:text-3xl text-lg text-gray-500 lg:gap-3 gap-2'>
                <i className="fa-solid fa-heart-pulse w-8 text-center"></i>
                <input type="text" placeholder='Heart Rate' className='text-lg flex-grow appearance-none focus:outline-none' readOnly />
                <i className="fa-solid fa-pencil text-lg cursor-pointer"></i>
              </div>

              <div className='flex items-center lg:text-3xl text-lg text-gray-500 lg:gap-3 gap-2'>
                <i className="fa-solid fa-pager w-8 text-center"></i>
                <input type="text" placeholder='ECG' className='text-lg flex-grow appearance-none focus:outline-none' value='' readOnly />
                <i className="fa-solid fa-pencil text-lg cursor-pointer"></i>
              </div>

              <div className='flex items-center lg:text-3xl text-lg text-gray-500 lg:gap-3 gap-2'>
                <i class="fa-solid fa-droplet w-8 text-center"></i>
                <input type="text" placeholder='Blood Pressure' className='text-lg flex-grow appearance-none focus:outline-none' value='' readOnly />
                <i className="fa-solid fa-pencil text-lg cursor-pointer"></i>
              </div>

              <div className='flex items-center lg:text-3xl text-lg text-gray-500 lg:gap-3 gap-2'>
                <i class="fa-solid fa-lungs w-8 text-center lg:relative lg:right-0.5"></i>
                <input type="text" placeholder='Breathing Rate' className='text-lg flex-grow appearance-none focus:outline-none' value='' readOnly />
                <i className="fa-solid fa-pencil text-lg cursor-pointer"></i>
              </div>

              <div className='flex items-center lg:text-3xl text-lg text-gray-500 lg:gap-3 gap-2'>
                <i class="fa-solid fa-temperature-full w-8 text-center"></i>
                <input type="text" placeholder='Temperature' className='text-lg flex-grow appearance-none focus:outline-none' value='' readOnly />
                <i className="fa-solid fa-pencil text-lg cursor-pointer"></i>
              </div>

              <div className='flex items-center lg:text-3xl text-lg text-gray-500 lg:gap-3 gap-2'>
                <i className="fa-solid fa-virus-covid w-8 text-center"></i>
                <input type="text" placeholder='Disease Diagnose' className='text-lg flex-grow appearance-none focus:outline-none' />
                <i className="fa-solid fa-pencil text-lg cursor-pointer invisible"></i>
              </div>
            </div>

            <div className='flex mt-7 lg:mt-5 mb-5 justify-center lg:justify-end lg:mr-5 gap-10'>
              <button id="voiceRecorderBtn" class="w-9 lg:w-12 h-9 lg:h-12 bg-red-500 text-white rounded-full flex justify-center items-center hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none relative">
                <i class="fa-solid fa-microphone lg:fa-lg"></i>
                <span id="pulseEffect" class="absolute w-full h-full rounded-full bg-red-400 opacity-75 scale-125 hidden animate-ping"></span>
              </button>
              <button className='lg:py-2 p-1 px-3 bg-[#0CC1E0] text-white space-x-2 rounded-2xl hover:bg-gray-400 hover:text-black' onClick={() => setIsFlipped(!isFlipped)}><span className='text-sm lg:text-base'>Prescription</span><i class="fa-solid fa-pills lg:fa-xl"></i></button>
            </div>
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
    </>
  );
}

export default PatientDetailCard;