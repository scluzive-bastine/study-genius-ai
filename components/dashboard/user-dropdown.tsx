import { Button } from '@/components/ui/button'
import { LogOutIcon, PlusCircleIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { DropdownMenuSeparator } from '../ui/dropdown-menu'

const UserDropdown = () => {
  const { data: session } = useSession()

  const handleSubmit = () => {
    signOut({
      callbackUrl: '/',
    })
  }
  return (
    <>
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
    </>
  )
}

export default UserDropdown
