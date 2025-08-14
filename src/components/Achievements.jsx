import React from 'react'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      icon: 'fas fa-certificate',
      title: 'AICTE Approved',
      description: 'Approved by All India Council for Technical Education'
    },
    {
      icon: 'fas fa-university',
      title: 'MAKAUT Affiliated',
      description: 'Affiliated with Maulana Abul Kalam Azad University of Technology'
    },
    {
      icon: 'fas fa-award',
      title: 'Government Aided',
      description: 'Aided by Government of West Bengal'
    },
    {
      icon: 'fas fa-handshake',
      title: 'MZP Supported',
      description: 'Supported by Murshidabad Zilla Parishad'
    }
  ]

  return (
    <section className="achievements">
      <div className="container">
        <h2 className="section-title text-center animate-fade-up">Our Achievements & Recognition</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card animate-scale-up">
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
