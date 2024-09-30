import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ParentHomeCards from "../../Cards/ParentHomeCards";

function Hero() {
  return (
    <>
      <Header />
      <main className='w-full mb-20'>
        <section className='mt-10 bg-[#E4F6F9] rounded-3xl mx-3 lg:mx-6 min-h-[450px] flex lg:justify-between lg:items-center lg:flex-row flex-col'>
          {/* Left arrow button (Desktop only) */}
          <div className="ml-3 rounded-full lg:min-w-11 lg:flex lg:justify-center lg:items-center hidden">
            <div className="rounded-full bg-[#0CC1E0] h-10 w-10 flex justify-center items-center cursor-pointer">
              <i className="fa-solid fa-arrow-left fa-xl" style={{ color: '#fff' }}></i>
            </div>
          </div>

          {/* Main Hero Section */}
          <div className="h-full flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center lg:mx-12 ml-6 mt-4 items-center overflow-hidden">
            <div className="lg:w-full mr-10">
              <h1 className="lg:text-5xl text-3xl font-semibold lg:text-left">
                Find and Book the <br className="hidden lg:block" />
                <span className="text-[#0CC1E0]">Best Doctors</span> near you
              </h1>

              {/* Form section */}
              <div className="space-y-7 mt-7">
                <div className="lg:flex">
                  {/* Problem Selection */}
                  <div className="relative flex lg:inline-flex items-center mb-4 lg:mb-0">
                    <i className="fa-solid fa-suitcase-medical fa-lg absolute left-4 text-[#0CC1E0]"></i>
                    <select className="p-3 px-14 rounded-3xl lg:rounded-r-none lg:rounded-l-3xl border-2 border-[#0cc1e0] font-medium focus:outline-none appearance-none flex-grow">
                      <option value="">Select Problem</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/* Specialist Selection */}
                  <div className="relative flex lg:inline-flex items-center">
                    <i className="fa-solid fa-suitcase-medical fa-lg absolute left-4 text-[#0CC1E0]"></i>
                    <select className="p-3 px-14 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl border-2 border-l-0 border-[#0cc1e0] font-medium focus:outline-none appearance-none flex-grow">
                      <option value="">Select Specialist</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Find Now button */}
                <button className="uppercase bg-[#0CC1E0] p-2 lg:p-3 px-5 lg:px-8 rounded-3xl text-white font-semibold lg:block hover:text-[#0CC1E0] hover:bg-white hover:shadow-full shadow-[#0CC1E0]">
                  Find Now
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:h-1/2 lg:w-1/2 mb-6 lg:mb-0 overflow-hidden">
              <img
                src="../public/images/hero.png"
                alt="Hero Image"
                className="lg:max-w-full lg:max-h-full w-2/3 h-2/3 lg:w-full lg:h-auto"
              />
            </div>
          </div>

          {/* Right arrow button (Desktop only) */}
          <div className="mr-3 rounded-full lg:min-w-11 lg:flex justify-center items-center hidden">
            <div className="rounded-full bg-[#0CC1E0] h-10 w-10 flex justify-center items-center cursor-pointer">
              <i className="fa-solid fa-arrow-right fa-xl" style={{ color: '#fff' }}></i>
            </div>
          </div>

          {/* Arrow buttons for mobile */}
          <div className="flex lg:hidden justify-end mr-5 mb-5 space-x-2">
            <div className="rounded-full bg-[#0CC1E0] p-2 px-3">
              <i className="fa-solid fa-arrow-left" style={{ color: '#fff' }}></i>
            </div>
            <div className="rounded-full bg-[#0CC1E0] p-2 px-3">
              <i className="fa-solid fa-arrow-right" style={{ color: '#fff' }}></i>
            </div>
          </div>
        </section>
        <ParentHomeCards />
      </main>
      <Footer />
    </>
  );
}

export default Hero;
