import Navbar from '@/components/dashboard/navbar'
import Sidebar from '@/components/dashboard/sidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import React from 'react'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount()
  return (
    <div className='relative h-full bg-[#17181C]'>
      <div className='hidden h-full lg:flex md:w-72 md:flex-col md:fixed md:inset-y-0'>
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <div className='lg:pl-72 pb-20 bg-[#17181C]'>
        <div className=''>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
