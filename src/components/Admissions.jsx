import React from 'react'
import './Admissions.css'

const Admissions = () => {
  const timelineSteps = [
    {
      number: 1,
      title: 'Online Application',
      description: 'Complete the online application form with your academic details and personal information.'
    },
    {
      number: 2,
      title: 'Entrance Examination',
      description: 'Appear for the WBJEE or JEE Main examination as per the admission guidelines.'
    },
    {
      number: 3,
      title: 'Document Verification',
      description: 'Submit all required documents for verification during the admission process.'
    },
    {
      number: 4,
      title: 'Admission Confirmation',
      description: 'Pay the admission fees and confirm your seat to complete the enrollment process.'
    }
  ]

  return (
    <section id="admissions" className="admissions">
      <div className="container">
        <h2 className="section-title text-center animate-fade-up">Admissions Process</h2>
        <p className="section-subtitle text-center animate-fade-up">Your journey to excellence starts here</p>
        <div className="admissions-content">
          <div className="timeline animate-slide-in">
            {timelineSteps.map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">{step.number}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="help-card animate-scale-up">
            <h3>Need Help?</h3>
            <p>Our admissions team is here to assist you throughout the application process.</p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>registrar@mcetbhb.net</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 7734820495</span>
              </div>
            </div>
            <button className="btn btn-primary">Get Assistance</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admissions
