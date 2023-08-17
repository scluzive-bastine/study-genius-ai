import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 text-white border-b border-gray-800 bg-[#0e0c15] z-50 relative'>
      <div className='w-[8rem] lg:w-[11.8rem] relative'>
        <Image fill objectFit='contain' src='/logo.svg' alt='logo' />
      </div>
      <Link href='/dashboard'>
        <Button className='border border-gray-300 rounded-lg bg-transparent text-white'>
          Get Access
        </Button>
      </Link>
    </div>
  )
}

export default Navbar
