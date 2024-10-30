import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Login() {
  const [selectedAccountType, setSelectedAccountType] = useState('Patient');
  const handleClick = (accountType) => {
    setSelectedAccountType(accountType);
  };
  const [focusState, setFocusState] = useState({
    firstInput: false,
    secondInput: false,
    thirdInput: false,
    fourthInput: false,
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
      <main className="w-full mb-10 md:flex md:justify-end md:items-center md:px-5 md:mb-20 md:mt-10 ">
        <section className="flex-grow hidden md:flex md:justify-center md:items-center">
          <img src="/public/images/loginimage.jpg" alt="Login Image" className="lg:min-w-[500px] lg:max-w-[500px] max-w-96 min-w-96" />
        </section>

        <section className="w-full h-full md:w-1/2 md:shadow-full md:rounded-2xl md:pb-5">
          <h3 className="text-[#0CC1E0] text-lg md:text-2xl font-medium text-center mt-5">
            Choose Account Type
          </h3>

          <div className="mx-2 md:mx-0.5 mt-5 flex justify-center md:justify-evenly gap-1 flex-wrap">
            <div className={`border-2 border-solid cursor-pointer min-w-24 max-w-24 md:max-w-24 md:min-w-24 lg:min-w-28 lg:max-w-28 sm:max-w-28 sm:min-w-28 max-h-64 ${selectedAccountType === "Patient" ? "border-green-500 shadow-full shadow-green-500" : "border-[#0CC1E0]"}`} onClick={() => handleClick("Patient")}>
              <img src="/public/images/patient.png" alt="Patient Avatar Image" className="" />
              <p className="text-center mb-2 font-medium">Patient</p>
            </div>

            <div className={`border-2 border-solid cursor-pointer min-w-24 max-w-24 md:max-w-24 md:min-w-24 lg:min-w-28 lg:max-w-28 sm:max-w-28 sm:min-w-28 max-h-64 ${selectedAccountType === "Doctor" ? "border-green-500 shadow-full shadow-green-500" : "border-[#0CC1E0]"}`} onClick={() => handleClick("Doctor")}>
              <img src="/public/images/doctorlogin.png" alt="Doctor Avatar Image" className="" />
              <p className="text-center mb-2 font-medium">Doctor</p>
            </div>

            <div className={`border-2 border-solid cursor-pointer min-w-24 max-w-24 md:max-w-24 md:min-w-24 lg:min-w-28 lg:max-w-28 sm:max-w-28 sm:min-w-28 max-h-64 ${selectedAccountType === "Employee" ? "border-green-500 shadow-full shadow-green-500" : "border-[#0CC1E0]"}`} onClick={() => handleClick("Employee")}>
              <img src="/public/images/admin.png" alt="Employee Avatar Image" className="" />
              <p className="text-center mb-2 font-medium">Employee</p>
            </div>
          </div>

          <div className="mt-5 mx-10">
            {(selectedAccountType === "Doctor" || selectedAccountType === "Employee") ?
              <>
                {selectedAccountType === "Doctor" ? <p className="text-center text-sm text-gray-400">Hello Doctor<br /> Please fill out the form below to get started</p> : <p className="text-center text-sm text-gray-400">Hello Employee<br /> Please fill out the form below to get started</p>}

                <div className="relative w-full mt-7">
                  <div className={`flex items-center border-2 rounded-lg ${focusState.firstInput ? "border-[#0CC1E0]" : "border-gray-300"
                    }`}>
                    <i
                      className={`fa-solid fa-user ml-3 ${focusState.firstInput ? "text-[#0CC1E0]" : "text-gray-400"
                        }`}
                    ></i>
                    <input
                      type="text"
                      className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0"
                      onFocus={() => handleFocus("firstInput")}
                      onBlur={(e) => handleBlur("firstInput", e)}
                    />
                    <label className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState.firstInput ? "-top-3 text-[#0CC1E0] text-sm bg-white px-1" : "top-3 text-gray-400"}`}>Username</label>
                  </div>
                </div>

                <div className="relative w-full mt-3">
                  <div className={`flex items-center border-2 rounded-lg ${focusState.secondInput ? "border-[#0CC1E0]" : "border-gray-300"
                    }`}>
                    <i
                      className={`fa-solid fa-lock ml-3 ${focusState.secondInput ? "text-[#0CC1E0]" : "text-gray-400"
                        }`}
                    ></i>
                    <input
                      type="text"
                      className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0"
                      onFocus={() => handleFocus("secondInput")}
                      onBlur={(e) => handleBlur("secondInput", e)}
                    />
                    <label className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState.secondInput ? "-top-3 text-[#0CC1E0] text-sm bg-white px-1" : "top-3 text-gray-400"}`}>Password</label>
                  </div>
                </div>
              </>
              : null}

            {selectedAccountType === "Patient" ?
              <>
                <p className="text-center text-sm text-gray-400">Have a nice day!<br /> Please fill out the form below to get started</p>

                <div className="relative w-full mt-5">
                  <div className={`flex items-center border-2 rounded-lg ${focusState.thirdInput ? "border-[#0CC1E0]" : "border-gray-300"
                    }`}>
                    <i
                      className={`fa-solid fa-phone ml-3 ${focusState.thirdInput ? "text-[#0CC1E0]" : "text-gray-400"
                        }`}
                    ></i>
                    <input
                      type="text"
                      className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0"
                      onFocus={() => handleFocus("thirdInput")}
                      onBlur={(e) => handleBlur("thirdInput", e)}
                    />
                    <label className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState.thirdInput ? "-top-3 text-[#0CC1E0] text-sm bg-white px-1" : "top-3 text-gray-400"}`}>Phone Number</label>
                  </div>
                </div>

                <div className="relative w-full mt-3">
                  <div className={`flex items-center border-2 rounded-lg ${focusState.fourthInput ? "border-[#0CC]" : "border-gray-300"
                    }`}>
                    <i
                      className={`fa-solid fa-lock ml-3 ${focusState.fourthInput ? "text-[#0CC]" : "text-gray-400"
                        }`}
                    ></i>
                    <input
                      type="text"
                      className="w-full pl-3 pr-3 py-2 outline-none border-none rounded-lg focus:ring-0"
                      onFocus={() => handleFocus("fourthInput")}
                      onBlur={(e) => handleBlur("fourthInput", e)}
                    />
                    <label className={`absolute left-10 transition-all duration-200 ease-in-out ${focusState.fourthInput ? "-top-3 text-[#0CC] text-sm bg-white px-1" : "top-3 text-gray-400"}`}>Password</label>
                  </div>
                </div>
              </>
              : null}
          </div>


          <div className="mt-2 mx-10">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-4">
                <button className="text-[12px] text-gray-400 hover:text-[#0CC1E0] cursor-pointer text-start">Forget Password?</button>
                {selectedAccountType === "Patient" ?
                  <>
                    <p className="text-[12px]">Don't have an account? <button className="text-[#0CC1E0]">Signup</button></p>
                  </> : null}
              </div>
              {selectedAccountType === "Patient" ? <>
                <Link to='/patientdashboard' className="text-white bg-[#0CC1E0] p-2 px-3 rounded-xl font-medium hover:bg-gray-400 hover:text-black">Login</Link>
              </> : null}
              {selectedAccountType === "Employee" ? <>
                <Link to='/admin' className="text-white bg-[#0CC1E0] p-2 px-3 rounded-xl font-medium hover:bg-gray-400 hover:text-black">Login</Link>
              </> : null}
              {selectedAccountType === "Doctor" ? <>
                <Link to='/doctordashboard' className="text-white bg-[#0CC1E0] p-2 px-3 rounded-xl font-medium hover:bg-gray-400 hover:text-black">Login</Link>
              </> : null}

            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;