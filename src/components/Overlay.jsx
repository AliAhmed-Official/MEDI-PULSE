import React from 'react';

function Overlay({ isVisible, onClose }) {
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center" onClick={(e) => e.stopPropagation()} // Prevent click on content from closing the overlay
      >

        {/* My Content */}
        <h2 className="text-xl font-semibold">Overlay Content</h2>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClose}>Close</button>


      </div>
    </div>
  );
};

export default Overlay;

// const [isOverlayVisible, setOverlayVisible] = useState(false);

// const toggleOverlay = () => {
//   setOverlayVisible(!isOverlayVisible);
// };


{/* <div className="p-4">
  <h1 className="text-2xl font-bold">Hello, React!</h1>
  <button
    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    onClick={toggleOverlay}
  >
    Toggle Overlay
  </button>
  <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
</div> */}