import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/navbar'
import React from 'react'

const LandingPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='lg:h-screen overflow-hidden'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default LandingPage
