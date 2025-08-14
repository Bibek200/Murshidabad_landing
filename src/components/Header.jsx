import React, { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <header className={`mcet-header ${isVisible ? 'visible' : ''}`}>
      <div className="header-container">
        <div className="header-logo-section">
          <div className="logo-wrapper">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2F261aba5d7af5410ca5dd573a40fe4719%2Fb3d1d018843c47fca3a05a486b5dcdb3?format=webp&width=800" 
              alt="MCET Logo" 
              className="header-logo"
            />
          </div>
        </div>
        
        <div className="header-content">
          <h1 className="college-name">
            Murshidabad College of Engineering & Technology
          </h1>
          <p className="college-subtitle">
            A Center of Technological & Professional Excellence | ESTD: 1998
          </p>
          <p className="college-details">
            Approved by AICTE | Affiliated to MAKAUT (WBUT) | Aided by Government of W.B. | Supported by Murshidabad Zilla Parishad (MZP)
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
