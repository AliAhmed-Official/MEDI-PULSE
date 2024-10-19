import React from 'react'

function FloatingInput({ label, id, value, onChange, type }) {
  return (
    <div className="relative z-0 w-full mb-2 group">
      <input
        type={type}
        id={id}
        className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-[#0cc1e0] peer"
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:left-3 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-3 cursor-text"
      >
        {label}
      </label>
    </div>
  )
}

export default FloatingInput;