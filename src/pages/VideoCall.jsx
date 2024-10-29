import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function VideoCall() {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);

  const toggleVideo = () => {
    setIsVideoOn((prev) => !prev);
  };

  const toggleAudio = () => {
    setIsAudioOn((prev) => !prev);
  };

  return (
    <>
      <div className="bg-gray-800 p-6">
        <div className='flex items-center justify-between mb-10'>
          <img src="/images/logo.png" className='w-24 h-16 sm:w-32 sm:h-24' alt="Logo" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Video Call</h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-5 mb-5">
          {/* Your Video */}
          <div className="w-full">
            <h3 className="text-xl font-semibold text-white mb-2">Your Video</h3>
            <div className={`w-full h-64 md:h-96 bg-gray-700 flex items-center justify-center rounded-lg border border-gray-600`}>
              {isVideoOn ? (
                <span className="text-gray-300">Your Video Feed</span>
              ) : (
                <span className="text-gray-500">Video Off</span>
              )}
            </div>
          </div>

          {/* Partner's Video */}
          <div className="w-full">
            <h3 className="text-xl font-semibold text-white mb-2">Doctor's Video</h3>
            <div className={`w-full h-64 md:h-96 bg-gray-700 flex items-center justify-center rounded-lg border border-gray-600`}>
              {isVideoOn ? (
                <span className="text-gray-300">Doctor's Video Feed</span>
              ) : (
                <span className="text-gray-500">Video Off</span>
              )}
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex space-x-4 mb-4 md:justify-center">
          <button
            onClick={toggleVideo}
            className={`py-2 px-4 rounded-lg transition duration-300 ease-in-out ${isVideoOn ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white`}
          >
            {isVideoOn ? 'Turn Off Video' : 'Turn On Video'}
          </button>
          <button
            onClick={toggleAudio}
            className={`py-2 px-4 rounded-lg transition duration-300 ease-in-out ${isAudioOn ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white`}
          >
            {isAudioOn ? 'Mute' : 'Unmute'}
          </button>
        </div>

        {/* End Call Button */}
        <Link to='/doctorreview' className="mt-6 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition duration-300 ease-in-out block">
          <p className='text-center'>End Call</p>
        </Link>
      </div>
    </>
  );
}

export default VideoCall;