import Navbar from '@/components/dashboard/navbar'
import Sidebar from '@/components/dashboard/sidebar'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative h-full'>
      <div className='hidden h-full lg:flex md:w-72 md:flex-col md:fixed md:inset-y-0'>
        <Sidebar />
      </div>
      <div className='lg:pl-72'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
