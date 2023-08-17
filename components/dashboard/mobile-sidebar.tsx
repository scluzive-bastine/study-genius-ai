'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from '@/components/dashboard/sidebar'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant='default' size='icon' className='lg:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
