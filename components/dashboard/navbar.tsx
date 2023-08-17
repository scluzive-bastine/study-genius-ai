import React from 'react'
import MobileSidebar from './mobile-sidebar'

const Navbar = () => {
  return (
    <div className='flex items-center justify-end p-3 relative rounded-lg bg-[#08070e]'>
      <MobileSidebar />
      <div className='text-muted-foreground'>user</div>
    </div>
  )
}

export default Navbar
