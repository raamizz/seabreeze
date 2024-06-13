import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="custom-tab">Services</div>
      <div>
        <img src="/Images/SB_logo.png" className="h-24 w-24 " alt="" />
      </div>
      {/* // <div className="navright"> */}
      <div className="custom-tab">Get in touch</div>
      {/* </div> */}
    </div>
  );
}

export default NavBar
