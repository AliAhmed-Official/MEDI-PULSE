import { React } from 'react';
import ReceptionistHeaderSidebar from '../components/Receptionist/ReceptionistHeaderSidebar';
import {
  AreaChart,
  PieChart,
  Pie,
  Cell,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function ReceptionistDashboard() {
  const data = [
    { date: "19 Sep", newPatients: 30, oldPatients: 20 },
    { date: "20 Sep", newPatients: 45, oldPatients: 35 },
    { date: "21 Sep", newPatients: 50, oldPatients: 40 },
    { date: "22 Sep", newPatients: 30, oldPatients: 45 },
    { date: "23 Sep", newPatients: 60, oldPatients: 50 },
    { date: "24 Sep", newPatients: 80, oldPatients: 60 },
  ];
  const demographicsData = [
    { name: '0-18', value: 15 },
    { name: '19-35', value: 30 },
    { name: '36-50', value: 25 },
    { name: '51-65', value: 20 },
    { name: '65+', value: 10 }
  ];
  const COLORS = ['#A0EEC0', '#8AE9C1', '#86CD82', '#72A276', '#666B6A'];
  const renderLabel = ({ percent }) => {
    return `${(percent * 100).toFixed(0)}%`;
  };
  return (
    <>
      <ReceptionistHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px]'>
        <div className='my-5 mx-3 md:mx-5 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Dashboard</p>
          <p><i className="fa-solid fa-columns text-lg"></i></p>
        </div>

        <div class="m-3 md:m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-purple-100 rounded-lg p-5 shadow-md">
            <div class="flex items-center">
              <div class="bg-purple-500 text-white rounded-full p-3 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h-2V3a1 1 0 011-1zm0 4a6 6 0 100 12 6 6 0 000-12zM2 10a8 8 0 1115.99.24A8.001 8.001 0 012 10z" /></svg>
              </div>
              <div>
                <h4 class="font-bold text-lg">Total Appointments</h4>
                <p class="text-2xl">650</p>
              </div>
            </div>
            <div class="mt-2">
              <svg class="w-full h-2" fill="none" viewBox="0 0 100 2">
                <path stroke="#6B46C1" d="M0 1h100" stroke-width="2" />
              </svg>
            </div>
          </div>

          <div class="bg-green-100 rounded-lg p-5 shadow-md">
            <div class="flex items-center">
              <div class="bg-green-500 text-white rounded-full p-3 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h-2V3a1 1 0 011-1zm0 4a6 6 0 100 12 6 6 0 000-12zM2 10a8 8 0 1115.99.24A8.001 8.001 0 012 10z" /></svg>
              </div>
              <div>
                <h4 class="font-bold text-lg">Total New Patients</h4>
                <p class="text-2xl">129</p>
              </div>
            </div>
            <div class="mt-2">
              <svg class="w-full h-2" fill="none" viewBox="0 0 100 2">
                <path stroke="#38A169" d="M0 1h100" stroke-width="2" />
              </svg>
            </div>
          </div>

          <div class="bg-orange-100 rounded-lg p-5 shadow-md">
            <div class="flex items-center">
              <div class="bg-orange-500 text-white rounded-full p-3 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h-2V3a1 1 0 011-1zm0 4a6 6 0 100 12 6 6 0 000-12zM2 10a8 8 0 1115.99.24A8.001 8.001 0 012 10z" /></svg>
              </div>
              <div>
                <h4 class="font-bold text-lg">Emergency Slots Remaining</h4>
                <p class="text-2xl">12</p>
              </div>
            </div>
            <div class="mt-2">
              <svg class="w-full h-2" fill="none" viewBox="0 0 100 2">
                <path stroke="#F6AD55" d="M0 1h100" stroke-width="2" />
              </svg>
            </div>
          </div>

          <div class="bg-blue-100 rounded-lg p-5 shadow-md">
            <div class="flex items-center">
              <div class="bg-blue-500 text-white rounded-full p-3 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h-2V3a1 1 0 011-1zm0 4a6 6 0 100 12 6 6 0 000-12zM2 10a8 8 0 1115.99.24A8.001 8.001 0 012 10z" /></svg>
              </div>
              <div>
                <h4 class="font-bold text-lg">Total Absent Doctors</h4>
                <p class="text-2xl">4</p>
              </div>
            </div>
            <div class="mt-2">
              <svg class="w-full h-2" fill="none" viewBox="0 0 100 2">
                <path stroke="#3182CE" d="M0 1h100" stroke-width="2" />
              </svg>
            </div>
          </div>
        </div>

        <div className='m-3 md:m-5 grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='bg-white p-2 rounded-2xl' style={{ width: "100%" }}>
            <h3 className='text-xl md:text-2xl text-gray-500 font-medium'>Hospital Survey</h3>
            <ResponsiveContainer width="100%" height={300}> {/* Set a fixed height */}
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorNewPatients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0cc1e0" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0cc1e0" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorOldPatients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff6f61" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ff6f61" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 'dataMax + 10']} /> {/* Set domain to control stretching */}
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Area
                  type="monotone"
                  dataKey="newPatients"
                  stroke="#0cc1e0"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorNewPatients)"
                />
                <Area
                  type="monotone"
                  dataKey="oldPatients"
                  stroke="#ff6f61"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorOldPatients)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className='bg-white p-2 rounded-2xl' style={{ width: "100%" }}>
            <h3 className='text-xl md:text-2xl text-gray-500 font-medium'>Patient Age Group Survey</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={demographicsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label={renderLabel} // Use the custom label function to show only percentage
                >
                  {demographicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='m-3 md:m-5 grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div class="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">
            <h2 class="text-xl md:text-2xl text-gray-500 font-medium mb-4">Doctors List</h2>
            <table class="min-w-full divide-y divide-gray-200 ">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Name</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">1</td>
                  <td class="px-6 py-4 whitespace-nowrap">Dr. Ayesha Khan <span class="text-gray-500 text-xs">(MBBS, MD)</span></td>
                  <td class="px-6 py-4 whitespace-nowrap"><span class="bg-green-200 text-green-800 px-2 py-1 rounded">Available</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">2</td>
                  <td class="px-6 py-4 whitespace-nowrap">Dr. Bilal Ahmed <span class="text-gray-500 text-xs">(BDS, MDS)</span></td>
                  <td class="px-6 py-4 whitespace-nowrap"><span class="bg-orange-200 text-orange-800 px-2 py-1 rounded">Absent</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">3</td>
                  <td class="px-6 py-4 whitespace-nowrap">Dr. Fatima Rehman <span class="text-gray-500 text-xs">(BHMS)</span></td>
                  <td class="px-6 py-4 whitespace-nowrap"><span class="bg-green-200 text-green-800 px-2 py-1 rounded">Available</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">4</td>
                  <td class="px-6 py-4 whitespace-nowrap">Dr. Saad Malik <span class="text-gray-500 text-xs">(MBBS, MS)</span></td>
                  <td class="px-6 py-4 whitespace-nowrap"><span class="bg-green-200 text-green-800 px-2 py-1 rounded">Available</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">5</td>
                  <td class="px-6 py-4 whitespace-nowrap">Dr. Hina Noor <span class="text-gray-500 text-xs">(MBBS, MD)</span></td>
                  <td class="px-6 py-4 whitespace-nowrap"><span class="bg-orange-200 text-orange-800 px-2 py-1 rounded">Absent</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">6</td>
                  <td class="px-6 py-4 whitespace-nowrap">Dr. Omar Farooq <span class="text-gray-500 text-xs">(MBBS)</span></td>
                  <td class="px-6 py-4 whitespace-nowrap"><span class="bg-green-200 text-green-800 px-2 py-1 rounded">Available</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">
            <h2 class="text-xl md:text-2xl text-gray-500 font-medium mb-4">Booked Appointments</h2>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Doctor</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">1</td>
                  <td class="px-6 py-4 whitespace-nowrap">Ali Khan</td>
                  <td class="px-6 py-4 whitespace-nowrap">Dr. Ahmed Malik</td>
                  <td class="px-6 py-4 whitespace-nowrap">12/05/2016</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">2</td>
                  <td class="px-6 py-4 whitespace-nowrap">Fatima Iqbal</td>
                  <td class="px-6 py-4 whitespace-nowrap">Dr. Sara Ahmed</td>
                  <td class="px-6 py-4 whitespace-nowrap">12/05/2016</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

export default ReceptionistDashboard;