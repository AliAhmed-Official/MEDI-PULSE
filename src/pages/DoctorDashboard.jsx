import { React } from 'react';
import DoctorHeaderSidebar from '../components/Doctor/DoctorHeaderSidebar';
import {
  PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function DoctorDashboard() {
  const patientData = [
    { month: 'Jan', newPatients: 30, oldPatients: 70 },
    { month: 'Feb', newPatients: 50, oldPatients: 60 },
    { month: 'Mar', newPatients: 40, oldPatients: 80 },
    { month: 'Apr', newPatients: 100, oldPatients: 90 },
    { month: 'May', newPatients: 60, oldPatients: 75 },
  ];
  const demographicData = [
    { group: '0-18', count: 20 },
    { group: '19-35', count: 45 },
    { group: '36-50', count: 30 },
    { group: '51-65', count: 25 },
    { group: '66+', count: 15 },
  ];
  const genderData = [
    { name: 'Male', value: 400 },
    { name: 'Female', value: 300 },
  ];
  const COLORS = ['#0cc1e0', '#f08080'];
  return (
    <>
      <DoctorHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px]'>
        <div className='m-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-columns text-lg"></i></p>
        </div>

        <div className='flex flex-col bg-[#F0F3FB] m-5 gap-10'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 bg-[#F0F3FB]'>
            <div className='rounded-3xl text-[#3ed5ef] shadow-full'>
              <div className='bg-[#E4F6F9] rounded-t-3xl p-2'>
                <p className='text-center font-semibold text-xs sm:text-base'>Today Appointments</p>
              </div>
              <div className='bg-white rounded-b-3xl flex justify-around items-center p-2 lg:p-4 gap-2'>
                <i className="fa-solid fa-users text-2xl md:text-3xl lg:text-4xl"></i>
                <div className='space-y-2'>
                  <p className='text-lg sm:text-xl lg:text-2xl font-bold text-center'>536431</p>
                  <p className='text-xs sm:text-sm lg:text-base'>Till Today</p>
                </div>
              </div>
            </div>

            <div className='rounded-3xl text-[#0CC1E0] shadow-full'>
              <div className='bg-[#E4F6F9] rounded-t-3xl p-2'>
                <p className='text-center font-semibold text-xs sm:text-base'>Clinic Visits</p>
              </div>
              <div className='bg-white rounded-b-3xl flex justify-around items-center p-2 lg:p-4 gap-2'>
                <i className="fa-solid fa-house-medical text-2xl md:text-3xl lg:text-4xl"></i>
                <div className='space-y-2'>
                  <p className='text-lg sm:text-xl lg:text-2xl font-bold text-center'>100</p>
                  <p className='text-xs sm:text-sm lg:text-base'>9/10/2024</p>
                </div>
              </div>
            </div>

            <div className='rounded-3xl text-[#0CC1E0] shadow-full'>
              <div className='bg-[#E4F6F9] rounded-t-3xl p-2'>
                <p className='text-center font-semibold text-xs sm:text-base'>Online Consultations</p>
              </div>
              <div className='bg-white rounded-b-3xl flex justify-around items-center p-2 lg:p-4 gap-2'>
                <i className="fa-solid fa-laptop-medical text-2xl md:text-3xl lg:text-4xl"></i>
                <div className='space-y-2'>
                  <p className='text-lg sm:text-xl lg:text-2xl font-bold text-center'>100</p>
                  <p className='text-xs sm:text-sm lg:text-base'>9/10/2024</p>
                </div>
              </div>
            </div>

            <div className='rounded-3xl text-[#0CC1E0] shadow-full'>
              <div className='bg-[#E4F6F9] rounded-t-3xl p-2'>
                <p className='text-center font-semibold text-xs sm:text-base'>Appointments Done</p>
              </div>
              <div className='bg-white rounded-b-3xl flex justify-around items-center p-2 lg:p-4 gap-2'>
                <i className="fa-solid fa-calendar-check text-2xl md:text-3xl lg:text-4xl"></i>
                <div className='space-y-2'>
                  <p className='text-lg sm:text-xl lg:text-2xl font-bold text-center'>100</p>
                  <p className='text-xs sm:text-sm lg:text-base'>9/10/2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className={'bg-white rounded-2xl p-3 space-y-3 shadow-lg'}>
              <p className='text-lg text-gray-600 font-semibold'>Patient Satisfaction Chart</p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={patientData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="newPatients" strokeWidth={4} stroke="#0cc1e0" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="oldPatients" strokeWidth={4} stroke="#908E8E" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className={'bg-white rounded-2xl p-3 space-y-3 shadow-lg'}>
              <p className='text-lg text-gray-600 font-semibold'>Patient Age Group</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={demographicData}>
                  <XAxis dataKey="group" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#0cc1e0" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={'bg-white rounded-2xl p-3 space-y-3 shadow-lg'}>
              <p className='text-lg text-gray-600 font-semibold'>Patient Gender Group</p>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Tooltip />
                  <Legend />
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}

export default DoctorDashboard;