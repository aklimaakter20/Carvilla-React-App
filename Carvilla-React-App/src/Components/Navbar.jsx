import React from 'react'
import './Navbar.css'
import '../assets/images/welcome-hero/welcome-banner.jpg'

function Navbar() {
  return (
    <div className='container'>
        <div className="layer"></div>
      <nav>
        <div className="navbar">
            <div className="logo">
                <h2>carvilla
                </h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="" className='active'>Home</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Featured Cars</a></li>
                    <li><a href="">New Cars</a></li>
                    <li><a href="">Brands</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
