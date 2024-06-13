import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="custom-tab">
        <a href="/services">Services</a>
      </div>
      <div>
        <a href="/">
          <img src="/Images/SB_Logo.png" className="h-24 w-24 " alt="" />
        </a>
      </div>
      {/* // <div className="navright"> */}
      <div className="custom-tab">
        <a href="/getintouch">Get in touch</a>
      </div>
      {/* </div> */}
    </div>
  );
}

export default NavBar
