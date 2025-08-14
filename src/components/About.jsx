import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './About.css'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  const [stats, setStats] = useState({
    placements: 0,
    years: 0,
    departments: 0
  })

  useEffect(() => {
    if (inView) {
      const animateValue = (key, target, suffix = '') => {
        const increment = target / 50
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          
          setStats(prev => ({
            ...prev,
            [key]: Math.ceil(current)
          }))
        }, 20)
      }

      animateValue('placements', 85)
      animateValue('years', 25)
      animateValue('departments', 4)
    }
  }, [inView])

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text animate-slide-in">
            <h2 className="section-title">About MCET BHB</h2>
            <p className="about-description">
              Murshidabad College of Engineering & Technology (MCET), established in 1998, stands as a beacon of technological and professional excellence in West Bengal. As an AICTE approved institution affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT), formerly known as West Bengal University of Technology (WBUT), MCET has been at the forefront of providing quality technical education.
            </p>
            <p className="about-description">
              Supported by the Government of West Bengal and the Murshidabad Zilla Parishad (MZP), we reflect our strong foundation and community backing. Our state-of-the-art infrastructure, experienced faculty, and industry partnerships ensure that our students receive world-class education and career opportunities.
            </p>
            <div className="about-stats" ref={ref}>
              <div className="stat-card animate-scale-up">
                <i className="fas fa-briefcase stat-icon"></i>
                <div className="stat-content">
                  <h3 className="stat-number">{stats.placements}%</h3>
                  <p className="stat-label">Placements</p>
                </div>
              </div>
              <div className="stat-card animate-scale-up">
                <i className="fas fa-microscope stat-icon"></i>
                <div className="stat-content">
                  <h3 className="stat-number">{stats.years}+</h3>
                  <p className="stat-label">Years of Excellence</p>
                </div>
              </div>
              <div className="stat-card animate-scale-up">
                <i className="fas fa-lightbulb stat-icon"></i>
                <div className="stat-content">
                  <h3 className="stat-number">{stats.departments}</h3>
                  <p className="stat-label">Engineering Departments</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image animate-slide-in">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&crop=center" 
              alt="MCET Campus Building" 
              className="about-img" 
              loading="lazy"
            />
            <div className="image-overlay">
              <div className="overlay-text">
                <h4>MCET Campus</h4>
                <p>Modern Infrastructure & Learning Environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
