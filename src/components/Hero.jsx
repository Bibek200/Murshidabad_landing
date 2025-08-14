import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [titleText, setTitleText] = useState('')
  const fullTitle = "Murshidabad College of Engineering & Technology"

  useEffect(() => {
    let i = 0
    const typeWriter = () => {
      if (i < fullTitle.length) {
        setTitleText(fullTitle.slice(0, i + 1))
        i++
        setTimeout(typeWriter, 100)
      }
    }
    
    const timer = setTimeout(typeWriter, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleButtonClick = (action) => {
    console.log(`${action} clicked`)
    // Add your button logic here
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop&crop=center" 
          alt="Campus Background" 
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-up">
          {titleText}
          <span className="cursor">|</span>
        </h1>
        <p className="hero-subtitle animate-fade-up">
          A Centre of Technological & Professional Excellence since 1998. AICTE Approved | Affiliated with MAKAUT (WBUT) | Aided by Government of W.B. | Supported by Murshidabad Zilla Parishad (MZP)
        </p>
        <div className="hero-buttons animate-fade-up">
          <button className="btn btn-primary" onClick={() => handleButtonClick('Start Application')}>
            Start Application
          </button>
          <button className="btn btn-secondary" onClick={() => handleButtonClick('Explore Programs')}>
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
