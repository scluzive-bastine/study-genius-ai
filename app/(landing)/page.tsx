import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/navbar'
import Products from '@/components/landing/products'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='h-full pb-20 md:pb-4'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default LandingPage
