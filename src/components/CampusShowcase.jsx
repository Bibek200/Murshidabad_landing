import React from 'react'
import './CampusShowcase.css'

const CampusShowcase = () => {
  const showcaseItems = [
    {
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop&crop=center",
      title: "Main Academic Block",
      description: "Central hub of learning with modern classrooms and laboratories",
      isMain: true
    },
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center",
      title: "Central Library",
      description: "Knowledge center with vast collection of resources"
    },
    {
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=300&fit=crop&crop=center",
      title: "Engineering Laboratories",
      description: "State-of-the-art labs for practical learning"
    },
    {
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop&crop=center",
      title: "Campus Entrance",
      description: "Welcoming gateway to excellence in education"
    },
    {
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop&crop=center",
      title: "Auditorium",
      description: "Venue for events, seminars, and cultural programs"
    }
  ]

  return (
    <section className="campus-showcase">
      <div className="container">
        <h2 className="section-title text-center animate-fade-up">Our Beautiful Campus</h2>
        <p className="section-subtitle text-center animate-fade-up">Explore the modern infrastructure and scenic environment of MCET BHB</p>
        <div className="campus-showcase-grid">
          {showcaseItems.map((item, index) => (
            <div key={index} className={`showcase-item ${item.isMain ? 'main-building' : ''} animate-scale-up`}>
              <img src={item.image} alt={item.title} className="showcase-img" />
              <div className="showcase-overlay">
                <div className="showcase-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CampusShowcase
