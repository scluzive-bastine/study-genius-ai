import MobileSidebar from './mobile-sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useSession } from 'next-auth/react'
import UserAvatar from '@/components/dashboard/user-image'
import { getApiLimitCount } from '@/lib/api-limit'
import { checkSubscription } from '@/lib/subscription'
import UserDropdown from './user-dropdown'

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()

  return (
    <div className='flex items-center space-x-3 justify-end p-3 relative bg-[#0b0c0e]'>
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <DropdownMenu>
        <DropdownMenuTrigger className='outline-none focus:ring-0'>
          <UserAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='rounded-sm p-2 mr-3 w-64'>
          <UserDropdown />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Navbar
