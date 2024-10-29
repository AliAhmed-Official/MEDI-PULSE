import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function JoinCall() {
  const [callCode, setCallCode] = useState('');
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const mediaStreamRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        mediaStreamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };
    getUserMedia();
    return () => {
      if (mediaStreamRef.current) {
        const tracks = mediaStreamRef.current.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const handleJoin = () => {
    if (callCode.trim()) {
      navigate(`/video-call/${callCode}`, { state: { isVideoOn, isMicOn } });
    }
  };

  const toggleMic = () => {
    const tracks = mediaStreamRef.current.getTracks();
    tracks.forEach(track => {
      if (track.kind === 'audio') {
        track.enabled = !track.enabled;
        setIsMicOn(track.enabled);
      }
    });
  };

  const toggleVideo = () => {
    setIsVideoOn((prev) => {
      const newState = !prev;
      const videoTracks = mediaStreamRef.current.getVideoTracks();
      videoTracks.forEach(track => {
        track.enabled = newState;
      });
      return newState;
    });
  };

  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <div className="bg-white p-8 rounded-lg shadow-full w-full max-w-md my-10 md:mb-20 mx-3">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Join a Call</h2>
          <input
            type="text"
            placeholder="Enter Call Code"
            value={callCode}
            onChange={(e) => setCallCode(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#0cc1e0]"
          />

          {/* Video Preview */}
          <div className="mb-4">
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-auto rounded-lg border border-gray-300"
            />
          </div>

          <Link to='/videocall' onClick={handleJoin} className="w-full py-2 bg-[#0cc1e0] text-white font-semibold rounded-lg hover:bg-[#0cc1e0] focus:outline-none focus:ring-2 focus:ring-[#0cc1e0] block text-center">Join Call</Link>

          <div className='flex justify-center items-center gap-4 mt-5'>
            <button onClick={toggleMic} className={`p-1 w-12 h-12 bg-red-600 text-white font-semibold rounded-lg hover:bg-opacity-80 focus:outline-none`}>{isMicOn ? <i className="fa-solid fa-microphone text-xl"></i> : <i className="fa-solid fa-microphone-slash text-xl"></i>}</button>

            <button onClick={toggleVideo} className={`p-1 w-12 h-12 bg-green-600 text-white font-semibold rounded-lg hover:bg-opacity-80 focus:outline-none`}>{isVideoOn ? <i className="fa-solid fa-video text-xl"></i> : <i className="fa-solid fa-video-slash text-xl"></i>}</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JoinCall;