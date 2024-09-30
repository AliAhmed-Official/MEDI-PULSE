function HeaderDoctor({ togglebtn }) {
  return (

    <>
      <header className="w-full fixed h-[60px] bg-[#e4f6f9] z-10">
        <nav className="h-full w-full flex items-center justify-between lg:justify-start lg:px-20 px-4">

          <div className="text-[#0BC1E0] lg:order-2 lg:ml-20">
            <i className="fa-solid fa-bars fa-lg cursor-pointer" onClick={togglebtn}></i>
          </div>

          <div className="h-full cursor-pointer flex items-center lg:order-1 lg:relative lg:right-3">
            <img src="../public/images/logo.png" alt="MEDIPULSE LOGO" className="lg:max-w-full max-h-full max-w-24 lg:relative lg:left-1" />
          </div>

        </nav>
      </header>
    </>
  )
}

export default HeaderDoctor;