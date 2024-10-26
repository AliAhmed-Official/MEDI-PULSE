import React from 'react';

function UpdateFloatingInput({ label, id, value, onChange, type }) {
  return (
    <>
      <div className="relative z-0 w-full mb-2 group">
        <input
          type={type}
          id={id}
          className="block py-3 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0] peer"
          placeholder=" "
          value={value}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className={`absolute text-sm text-gray-500 duration-300 transform 
          -translate-y-1/2 top-0 left-2 px-1 bg-white 
          ${value || "peer-focus"}:top-0 ${value || "peer-focus"}:left-2 
          scale-75 pointer-events-none`}
        >
          {label}
        </label>
      </div>
    </>
  )
}

export default UpdateFloatingInput;