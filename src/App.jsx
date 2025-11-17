import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import DashboardDemo from './components/DashboardDemo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0F]">
      <Hero />
      <Features />
      <DashboardDemo />
      <Footer />
    </div>
  )
}

export default App
