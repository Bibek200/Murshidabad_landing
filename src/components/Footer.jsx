import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribeStatus('Subscribed!')
      setEmail('')
      setTimeout(() => setSubscribeStatus(''), 2000)
    }
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F261aba5d7af5410ca5dd573a40fe4719%2Fb3d1d018843c47fca3a05a486b5dcdb3?format=webp&width=800" 
                alt="MCET BHB Logo" 
                className="footer-logo-img mcet-official-logo"
              />
              <span className="footer-logo-text">MCET BHB</span>
            </div>
            <p className="footer-description">
              Murshidabad College of Engineering & Technology, Berhampore - Shaping the future of engineering education with innovation and excellence.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#campus-life">Campus Life</a></li>
              <li><a href="#">Faculty</a></li>
              <li><a href="#">Alumni</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Berhampore, Murshidabad, West Bengal - 742101, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 7734820495</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@mcetbhb.net</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p className="newsletter-text">Stay updated with our latest news and events.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                {subscribeStatus || 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 MCET BHB. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
