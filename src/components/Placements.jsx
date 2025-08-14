import React from 'react'
import './Placements.css'

const Placements = () => {
  return (
    <section id="placement" className="placement">
      <div className="container">
        <h2 className="section-title text-center animate-fade-up">Training & Placements</h2>
        <p className="section-subtitle text-center animate-fade-up">Dedicated placement cell ensuring bright career prospects</p>
        <div className="placement-content">
          <div className="placement-stats">
            <div className="placement-stat animate-scale-up">
              <h3>85%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="placement-stat animate-scale-up">
              <h3>50+</h3>
              <p>Company Partners</p>
            </div>
            <div className="placement-stat animate-scale-up">
              <h3>₹8 LPA</h3>
              <p>Highest Package</p>
            </div>
          </div>
          <div className="placement-companies">
            <h3>Our Placement Partners</h3>
            <p>Leading companies like Wipro, Infosys, TCS, Accenture, Amazon, Cognizant, and many more recruit our students regularly.</p>
            <div className="company-logos">
              <div className="company-logo">Wipro</div>
              <div className="company-logo">Infosys</div>
              <div className="company-logo">TCS</div>
              <div className="company-logo">Accenture</div>
              <div className="company-logo">Amazon</div>
              <div className="company-logo">Cognizant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Placements
