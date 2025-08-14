import React from 'react'
import './NewsEvents.css'

const NewsEvents = () => {
  const news = [
    {
      date: 'Recent',
      title: 'WBJEE Aspirants Notification',
      description: 'Congratulations to all WBJEE Aspirants. For 2025-26 Batch in the Department of Computer Engineering, Civil Engineering, Mechanical Engineering, Electrical Engineering, and Electronics & Communication Engineering.'
    },
    {
      date: 'Important',
      title: 'Centralized Internal Test (CIT)',
      description: 'Notice regarding centralized internal test schedules and examination guidelines for all engineering departments.'
    },
    {
      date: 'Active',
      title: 'Training & Placement Cell',
      description: 'Wipro Elite Oil-Campus Drive, Infosys Recruitment for Software Engineer, Surroute Hiring for Production QC positions.'
    },
    {
      date: 'Resources',
      title: 'E-Resources Available',
      description: 'Access to NPTEL E-Resources, National Digital Library of India (NDLI), Swayam Portal, Spoken Tutorial (IITB), Virtual Labs (MHRD), e-Yantra (IITB), and AICTE E-Learning Links.'
    }
  ]

  return (
    <section className="news-events">
      <div className="container">
        <h2 className="section-title text-center animate-fade-up">Latest News & Events</h2>
        <div className="news-grid">
          {news.map((item, index) => (
            <div key={index} className="news-card animate-slide-up">
              <div className="news-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className="news-link">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsEvents
