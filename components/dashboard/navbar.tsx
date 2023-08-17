import React from 'react'
import MobileSidebar from './mobile-sidebar'

const Navbar = () => {
  return (
    <div className='flex items-center justify-end p-3'>
      <MobileSidebar />
    </div>
  )
}

export default Navbar
