import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <TechStack />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
