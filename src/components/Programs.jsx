import React from 'react'
import './Programs.css'

const Programs = () => {
  const programs = [
    {
      icon: 'fas fa-building',
      title: 'Civil Engineering',
      description: 'Build the infrastructure of tomorrow with expertise in construction, transportation, and environmental engineering. AICTE approved 4-year B.Tech program.'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Computer Engineering',
      description: 'Master programming, software development, and computer systems with hands-on experience in cutting-edge technologies. Industry-oriented curriculum.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Mechanical Engineering',
      description: 'Design, analyze, and manufacture mechanical systems with emphasis on automation and sustainable engineering practices.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Electrical Engineering',
      description: 'Power the future with knowledge in electrical systems, renewable energy, and smart grid technologies. Modern laboratory facilities.'
    },
    {
      icon: 'fas fa-broadcast-tower',
      title: 'Electronics & Communication Engineering',
      description: 'Innovate in telecommunications, embedded systems, and IoT with advanced laboratory facilities and industry exposure.'
    }
  ]

  return (
    <section id="programs" className="programs">
      <div className="container">
        <h2 className="section-title text-center animate-fade-up">Our Programs</h2>
        <p className="section-subtitle text-center animate-fade-up">
          Choose from our comprehensive range of engineering programs designed to meet industry demands
        </p>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card animate-slide-up">
              <div className="program-icon">
                <i className={program.icon}></i>
              </div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <a href="#" className="program-link">
                View Details <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
