import React from 'react'
import './Facilities.css'

const Facilities = () => {
  const facilities = [
    {
      icon: 'fas fa-book',
      title: 'Central Library',
      description: 'Well-equipped library with extensive collection of books, journals, and digital resources including MAKAUT (WBUT) Central Library access.'
    },
    {
      icon: 'fas fa-flask',
      title: 'Modern Laboratories',
      description: 'State-of-the-art laboratories for each department with latest equipment and software for hands-on learning and research.'
    },
    {
      icon: 'fas fa-wifi',
      title: 'Internet Facility',
      description: 'High-speed internet connectivity throughout the campus with dedicated computer center for student access.'
    },
    {
      icon: 'fas fa-home',
      title: 'Hostel Accommodation',
      description: 'Separate hostel facilities for boys and girls with modern amenities and comfortable living arrangements.'
    }
  ]

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <h2 className="section-title text-center animate-fade-up">Facilities</h2>
        <p className="section-subtitle text-center animate-fade-up">Modern infrastructure and world-class facilities for comprehensive learning</p>
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card animate-slide-up">
              <div className="facility-icon">
                <i className={facility.icon}></i>
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities
