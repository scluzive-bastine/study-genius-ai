'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from '@/components/dashboard/sidebar'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

interface MobileSidebarProps {
  apiLimitCount: number
  isPro: boolean
}

const MobileSidebar = ({ apiLimitCount = 0, isPro = false }: MobileSidebarProps) => {
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
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
