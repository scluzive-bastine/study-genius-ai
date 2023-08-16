import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/navbar'
import Products from '@/components/landing/products'
import React from 'react'

const LandingPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <Navbar />
      <Hero />
      {/* <Products /> */}
    </div>
  )
}

export default LandingPage
