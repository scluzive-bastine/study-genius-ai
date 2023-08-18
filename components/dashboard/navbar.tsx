'use client'
import MobileSidebar from './mobile-sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useSession } from 'next-auth/react'
import UserAvatar from '@/components/dashboard/user-image'
import { Button } from '@/components/ui/button'
import { LogOutIcon, PlusCircleIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()

  const handleSubmit = () => {
    signOut({
      callbackUrl: '/',
    })
  }

  return (
    <div className='flex items-center space-x-3 justify-end p-3 relative bg-[#0b0c0e]'>
      <MobileSidebar />
      <DropdownMenu>
        <DropdownMenuTrigger className='outline-none focus:ring-0'>
          <UserAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='rounded-sm p-2 mr-3 w-64'>
          <div className='text-grat-200 '>
            <h1 className='text-gray-900 text-sm'>{session?.user.name}</h1>
            <p className='text-gray-500 text-xs'>{session?.user.email}</p>
          </div>
          <DropdownMenuSeparator />
          <div className='flex flex-col space-y-1'>
            <Button className='bg-transparent hover:bg-gray-200 text-gray-900 text-left text-sm justify-start'>
              <PlusCircleIcon className='w-4 h-4 mr-2' /> Buy Credits
            </Button>
            <Button
              onClick={handleSubmit}
              className='bg-transparent hover:bg-gray-200 text-gray-900 text-left text-sm justify-start'
            >
              <LogOutIcon className='w-4 h-4 mr-2' /> Log out
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Navbar
