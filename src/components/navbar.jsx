
import React from 'react'
import Image from './image';
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <Image className="" src="https://latestlogo.com/wp-content/uploads/2024/01/olx-logo.png" width="100px" heigt="100px"/><span></span>
    
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
        <li className="nav-item">
          <a className="nav-link text-dark fw-bold" aria-current="page" href="#">
            All Categories
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-bold" href="#">
            Mobile Phones
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-bold" href="#">
             Cars 
          </a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link text-dark fw-bold" href="#">
         Motorcycles  
          </a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link text-dark fw-bold" href="#">
             House
          </a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link text-dark fw-bold" href="#">
            Video Audio
          </a>
        </li>
    
      </ul>
      <button className='btn btn-warning rounded-pill m-3 p-3 fw-bold'> &nbsp;&nbsp; S E L L  &nbsp;&nbsp;</button>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar;