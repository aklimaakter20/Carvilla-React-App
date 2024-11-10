import React from 'react'
import './Navbar.css'
import '../assets/images/welcome-hero/welcome-banner.jpg'
import './Card'
function Navbar() {
  return (
    <div className="container">
          <div className='navbar-section'>
        <div className="layer"></div>
      <nav>
        <div className="navbar">
            <div className="logo">
                <h2>carvilla</h2>
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
      <div className="navbar-section-des">
        <h1>get your desired car in resonable price</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='btn'>Contact Us</button>
      </div>
      <div className="search-bar">
        <form action="">
            <div className="row-all">
            <div className="row">
                <div>
                <label>Select Year</label>
                <select >
                <option value="">Year</option>
                <option value="">2025</option>
                <option value="">2026</option>
                <option value="">2027</option>
                </select>
                </div>
            <div>
            <label>select make</label>
            <select>
                <option value="">Make</option>
                <option value="">Toyota</option>
                <option value="">Holden</option>
                <option value="">Mercedes-Benz</option>
            </select>
            </div>
        <div>
        <label>Select Model</label>
            <select>
                <option>Model</option>
                <option>Kia-rio</option>
                <option>Mitsubishi</option>
                <option>Ford</option>
            </select>
        </div>
          
            </div>
            <div className="row">
                <div>
                <label>Body Style</label>
            <select >
                <option value="">style</option>
                <option value="">Sedan</option>
                <option value="">Van</option>
                <option value="">Roadster</option>
            </select>
                </div>
         <div>
         <label>car condition</label>
            <select>
                <option value="">Condition</option>
                <option value="">something</option>
                <option value="">Something</option>
                <option value="">Something</option>
            </select>
         </div>
         <div>
         <label>Price</label>
            <select>
                <option>Price</option>
                <option>0.76$</option>
                <option>0.98$</option>
                <option>0.76$</option>
            </select>
         </div>
      
       
            </div>
            </div>
       <div className='search-btn'>
       <button className='btn'>Search</button>

       </div>
        </form>
      </div>

   
      
    </div>
    </div>
  
 
  )
}

export default Navbar
