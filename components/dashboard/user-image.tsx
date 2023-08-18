'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'

const UserAvatar = () => {
  const { data: session } = useSession()

  const name = session?.user?.name.split(' ')!

  return (
    <Avatar>
      <AvatarImage src={session?.user.image} />
      <AvatarFallback className='text-white bg-gray-900'>
        {name[0].charAt(0)}
        {name[1].charAt(0)}
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
