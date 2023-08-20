'use client'

import { cn } from '@/lib/utils'
import {
  BookOpenIcon,
  CodeIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  LibraryIcon,
  MilestoneIcon,
  SettingsIcon,
} from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] })

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboardIcon,
    href: '/dashboard',
  },
  {
    label: 'Research Paper',
    icon: LibraryIcon,
    href: '/research',
  },
  {
    label: 'Code Helper',
    icon: CodeIcon,
    href: '/code',
  },
  // {
  //   label: 'Career Path',
  //   icon: MilestoneIcon,
  //   href: '/career',
  // },
  {
    label: 'Note-Taking Assistant',
    icon: BookOpenIcon,
    href: '/notes',
  },
  {
    label: 'Language Translation',
    icon: GraduationCapIcon,
    href: '/language',
  },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#0b0c0e] text-white'>
      <div className='px-3 py-4 flex-1'>
        <Link href='/dashboard'>
          <div className='bg-[#22232a] flex justify-start w-full mb-5 p-3 rounded-lg'>
            <div className='w-8 h-8 mr-4 relative'>
              <Image fill src='/mobile-logo.svg' alt='Logo' />
            </div>
            <div>
              <h1 className={cn('text-sm font-bold leading-[1]', montserrat.className)}>
                Study-Group
              </h1>
              <span className='text-muted-foreground text-xs'>Enhanced learning platform</span>
            </div>
          </div>
        </Link>
        <div className='space-y-1 p-2 rounded-2xl bg-[#22232a]'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href ? 'text-white bg-white/10' : 'text-zinc-400'
              )}
            >
              <div className='flex space-x-2 items-center'>
                <route.icon className='h-5 w-5 mr-3' /> {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='px-3'>
        <div className='bg-[#22232a] rounded-lg p-3'>
          <h1 className='mb-3 text-muted-foreground text-sm'>Customize</h1>
          <Link
            href='/settings'
            className={cn(
              'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
              pathname === 'settings' ? 'text-white bg-white/10' : 'text-zinc-400'
            )}
          >
            <div className='flex space-x-2 items-center'>
              <SettingsIcon className='w-5 h-5 mr-2' /> Settings
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
