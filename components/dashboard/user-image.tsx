'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { useSession } from 'next-auth/react'

const UserAvatar = ({ width = '10', height = '10' }: { width?: string; height?: string }) => {
  const { data: session } = useSession()

  const name = session?.user?.name.split(' ')!

  return (
    <Avatar className={cn('rounded-lg', `w-${width}`, `h-${height}`)}>
      <AvatarImage className='rounded-sm' src={session?.user.image} />
      <AvatarFallback className='text-white bg-gray-900'>
        {name[0].charAt(0)}
        {name[1].charAt(0)}
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
