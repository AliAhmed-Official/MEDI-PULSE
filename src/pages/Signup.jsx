import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Signup() {
  const [focusState, setFocusState] = useState({
    firstInput: false,
    secondInput: false,
    thirdInput: false,
  });
  const handleFocus = (inputName) => {
    setFocusState({ ...focusState, [inputName]: true });
  };
  const handleBlur = (inputName, e) => {
    if (e.target.value === '') {
      setFocusState({ ...focusState, [inputName]: false });
    }
  };

  return (
    <>
      <Header />
      <main className="w-full mb-10 md:flex md:justify-end md:px-5 md:mb-20 md:mt-10 ">
        <section className="flex-grow hidden md:flex md:justify-center md:items-center">
          <img src="/public/images/si.jpg" alt="Login Image" className="lg:min-w-[500px] lg:max-w-[500px] max-w-96 min-w-96" />
        </section>

        <section className="w-full h-full md:w-1/2 md:shadow-full md:rounded-2xl md:pb-5">
          <h3 className="text-[#0CC1E0] text-lg md:text-2xl font-medium text-center mt-5">Sign Up Now</h3>

          <div className="mt-5 mx-10">
            <div className="relative w-full mt-5">
              <div className={`flex items-center border-2 rounded-lg ${focusState.firstInput ? "border-[#0CC1E0]" : "border-gray-300"}`}>
                <i className={`fa-solid fa-phone ml-3 ${focusState.firstInput ? "text-[#0CC1E0]" : "text-gray-400"}`}></i>
                <input type="text" className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0" onFocus={() => handleFocus("firstInput")} onBlur={(e) => handleBlur("firstInput", e)} />
                <label className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState.firstInput ? "-top-3 text-[#0CC1E0] text-sm bg-white px-1" : "top-3 text-gray-400"}`}>Phone Number</label>
              </div>
            </div>

            <div className="relative w-full mt-3">
              <div className={`flex items-center border-2 rounded-lg ${focusState.secondInput ? "border-[#0CC1E0]" : "border-gray-300"}`}>
                <i className={`fa-solid fa-lock ml-3 ${focusState.secondInput ? "text-[#0CC1E0]" : "text-gray-400"}`}></i>
                <input type="text" className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0" onFocus={() => handleFocus("secondInput")} onBlur={(e) => handleBlur("secondInput", e)} />
                <label className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState.secondInput ? "-top-3 text-[#0CC1E0] text-sm bg-white px-1" : "top-3 text-gray-400"}`}>Password</label>
              </div>
            </div>

            <div className="relative w-full mt-3">
              <div className={`flex items-center border-2 rounded-lg ${focusState.thirdInput ? "border-[#0CC1E0]" : "border-gray-300"}`}>
                <i className={`fa-solid fa-lock ml-3 ${focusState.thirdInput ? "text-[#0CC1E0]" : "text-gray-400"}`}></i>
                <input type="text" className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0" onFocus={() => handleFocus("thirdInput")} onBlur={(e) => handleBlur("thirdInput", e)} />
                <label className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState.thirdInput ? "-top-3 text-[#0CC1E0] text-sm bg-white px-1" : "top-3 text-gray-400"}`}>Confirm Password</label>
              </div>
            </div>
          </div>

          <div className="mt-2 mx-10 flex">
            <button className="text-white bg-[#0CC1E0] p-2 rounded-xl font-medium hover:bg-gray-400 hover:text-black flex-grow"><span className="flex items-center justify-center gap-2">Continue<i class="fa-solid fa-arrow-right-long"></i></span></button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Signup