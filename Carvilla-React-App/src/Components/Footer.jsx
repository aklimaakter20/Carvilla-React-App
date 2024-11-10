import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="footer-section">
            <div className="logo-area">
                <h2>carvilla</h2>
                <p>Ased do eiusm tempor incidi ut <br /> labore et dolore magnaian aliqua. Ut <br /> enim ad minim veniam.</p>
                <p>name@domain.com</p>
                <span>+1 (222) 1234567890</span>
            </div>
            <div className="about-devloon">
                <h3 className='footer-h3'>about devloon</h3>
                <ul>
                    <li>About Us</li>
                    <li>Carrer</li>
                    <li>Terms of service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="top-brands">
                <h3>about devloon</h3>
                <div className='top-brand-ul'>
                <ul>
                    <li>BMW</li>
                    <li>Lamborghini</li>
                    <li>Camaro</li>
                    <li>Audi</li>
                    <li>Infiniti</li>
                    <li>Nissan</li>
                </ul>
                <ul>
                    <li>Ferrari</li>
                    <li>Porsche</li>
                    <li>Land Rover</li>
                    <li>Mersedes</li>
                    <li>Opel</li>
                  
                </ul>
                </div>
             
              
            </div>
            <div className="news-letter">
                <h3>News letter</h3>
                <p>Subscribe to get latest news update and informations</p>
                <input type="email" placeholder='Add Email' />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
