import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Programs from './components/Programs'
import Admissions from './components/Admissions'
import NewsEvents from './components/NewsEvents'
import Facilities from './components/Facilities'
import Placements from './components/Placements'
import CampusShowcase from './components/CampusShowcase'
import CampusLife from './components/CampusLife'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Programs />
      <Admissions />
      <NewsEvents />
      <Facilities />
      <Placements />
      <CampusShowcase />
      <CampusLife />
      <Footer />
    </div>
  )
}

export default App
