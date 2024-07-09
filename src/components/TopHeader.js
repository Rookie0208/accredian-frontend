import React from 'react'
import Logo from './assets/logo.png'

const TopHeader = () => {
  return (
    <>
    <div className="topheader">
    <p>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut rerum sit quis ad eos | 
    <a href='#'> Contact Expert</a>
    </p>
    </div>
    <div className='midHeader'>
      <div className="logo">
        <img src={Logo} alt="accredian-logo" />
        <button className='course-btn button'> Courses </button>
      </div>
      <div className="nav-links">
        <div className="nav-link">Refer & Earn</div>
        <div className="nav-link">Resources</div>
        <div className="nav-link">About Us</div>
        <div className="nav-link login-btn">Login</div>
        <div className="nav-link button">Try for Free</div>
      </div>
    </div>
    </>
  )
}

export default TopHeader