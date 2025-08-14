import React from 'react'
import './CampusLife.css'

const CampusLife = () => {
  const campusActivities = [
    {
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop&crop=center",
      icon: "fas fa-home",
      title: "Modern Hostels",
      description: "Comfortable accommodation with all modern amenities for a home-like experience."
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      icon: "fas fa-futbol",
      title: "Sports Complex",
      description: "State-of-the-art sports facilities including indoor and outdoor courts for all sports."
    },
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&crop=center",
      icon: "fas fa-users",
      title: "Student Clubs",
      description: "Join various technical and cultural clubs to explore your interests and develop skills."
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop&crop=center",
      icon: "fas fa-music",
      title: "Cultural Festivals",
      description: "Participate in exciting festivals, competitions, and events throughout the year."
    }
  ]

  return (
    <section id="campus-life" className="campus-life">
      <div className="container">
        <h2 className="section-title text-center animate-fade-up">Campus Life</h2>
        <p className="section-subtitle text-center animate-fade-up">Experience a vibrant campus culture that goes beyond academics</p>
        <div className="campus-grid">
          {campusActivities.map((activity, index) => (
            <div key={index} className="campus-card animate-zoom-in">
              <img src={activity.image} alt={activity.title} className="campus-img" />
              <div className="campus-overlay">
                <div className="campus-content">
                  <i className={`${activity.icon} campus-icon`}></i>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CampusLife
