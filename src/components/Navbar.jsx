import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const toggleDropdown = (dropdown) => {
    if (window.innerWidth <= 1024) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.offsetTop - 160
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        // <div className="nav-logo">
        //   <img 
        //     src="https://cdn.builder.io/api/v1/image/assets%2F261aba5d7af5410ca5dd573a40fe4719%2Fb3d1d018843c47fca3a05a486b5dcdb3?format=webp&width=800" 
        //     alt="MCET BHB Logo" 
        //     className="logo-img mcet-official-logo"
        //   />
        //   <span className="logo-text">MCET BHB</span>
        // </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <a href="#" className="nav-link" onClick={(e) => handleLinkClick(e, '#')}>Home</a>
          </div>
          
          <div className={`nav-item dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
            <a 
              href="#about" 
              className="nav-link" 
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault()
                  toggleDropdown('about')
                } else {
                  handleLinkClick(e, '#about')
                }
              }}
            >
              About Us <i className="fas fa-chevron-down"></i>
            </a>
            <div className="dropdown-menu">
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>Overview</a>
              <a href="#achievements" onClick={(e) => handleLinkClick(e, '#achievements')}>Achievements</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Vision & Mission</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Principal's Message</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>History</a>
            </div>
          </div>
          
          <div className={`nav-item dropdown ${activeDropdown === 'academics' ? 'active' : ''}`}>
            <a 
              href="#programs" 
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault()
                  toggleDropdown('academics')
                } else {
                  handleLinkClick(e, '#programs')
                }
              }}
            >
              Academics <i className="fas fa-chevron-down"></i>
            </a>
            <div className="dropdown-menu">
              <a href="#programs" onClick={(e) => handleLinkClick(e, '#programs')}>B.Tech Programs</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Civil Engineering</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Computer Engineering</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Mechanical Engineering</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Electrical Engineering</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Electronics & Communication</a>
            </div>
          </div>
          
          <div className={`nav-item dropdown ${activeDropdown === 'admissions' ? 'active' : ''}`}>
            <a 
              href="#admissions" 
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault()
                  toggleDropdown('admissions')
                } else {
                  handleLinkClick(e, '#admissions')
                }
              }}
            >
              Admissions <i className="fas fa-chevron-down"></i>
            </a>
            <div className="dropdown-menu">
              <a href="#admissions" onClick={(e) => handleLinkClick(e, '#admissions')}>B.Tech Admission</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Eligibility Criteria</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>WBJEE Guidelines</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Fee Structure</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Admission Help</a>
            </div>
          </div>
          
          <div className={`nav-item dropdown ${activeDropdown === 'facilities' ? 'active' : ''}`}>
            <a 
              href="#facilities" 
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault()
                  toggleDropdown('facilities')
                } else {
                  handleLinkClick(e, '#facilities')
                }
              }}
            >
              Facilities <i className="fas fa-chevron-down"></i>
            </a>
            <div className="dropdown-menu">
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Library</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Laboratories</a>
              <a href="#campus-life" onClick={(e) => handleLinkClick(e, '#campus-life')}>Hostel</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Computer Center</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Internet Facility</a>
            </div>
          </div>
          
          <div className={`nav-item dropdown ${activeDropdown === 'placement' ? 'active' : ''}`}>
            <a 
              href="#placement" 
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault()
                  toggleDropdown('placement')
                } else {
                  handleLinkClick(e, '#placement')
                }
              }}
            >
              Training & Placements <i className="fas fa-chevron-down"></i>
            </a>
            <div className="dropdown-menu">
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Training Cell</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Placement Statistics</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Career Guidance</a>
              <a href="#" onClick={(e) => handleLinkClick(e, '#')}>Industry Partners</a>
            </div>
          </div>
          
          <div className="nav-item">
            <a href="#recruitment" className="nav-link" onClick={(e) => handleLinkClick(e, '#recruitment')}>Recruitment</a>
          </div>
          
          <div className="nav-item">
            <a href="#ndl" className="nav-link" onClick={(e) => handleLinkClick(e, '#ndl')}>NDL Club</a>
          </div>
          
          <div className="nav-item">
            <a href="#webmail" className="nav-link" onClick={(e) => handleLinkClick(e, '#webmail')}>Web Mail</a>
          </div>
        </div>
        
        <button className="apply-btn">Apply Now</button>
        
        <div className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
