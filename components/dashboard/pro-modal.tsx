import { useProModal } from '@/hooks/pro-modal'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Badge } from '../ui/badge'
import {
  BookOpenIcon,
  CodeIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  LibraryIcon,
  ZapIcon,
} from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import axios from 'axios'

const tools = [
  {
    label: 'Dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    label: 'Research Paper',
    icon: LibraryIcon,
  },
  {
    label: 'Code Helper',
    icon: CodeIcon,
  },
  // {
  //   label: 'Career Path',
  //   icon: MilestoneIcon,
  //   href: '/career',
  // },
  {
    label: 'Note-Taking Assistant',
    icon: BookOpenIcon,
  },
  {
    label: 'Language Translation',
    icon: GraduationCapIcon,
  },
]
const ProModal = () => {
  const proModal = useProModal()
  const [loading, setLoading] = useState(false)

  const onSubscribe = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/stripe')

      window.location.href = response.data.url
    } catch (error) {
      console.log(error, 'STRIPE_ERROR')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className='border border-gray-800 bg-[#0b0c0e]'>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-1 pb-2'>
            <div className='flex items-center gap-x-2 py-1 text-gray-200'>
              Upgrade to Study-Group-Ai
              <Badge className='uppercase text-xs py-1 px-3 bg-gradient-to-br from-emerald-600 via-purple-700 to-pink-800'>
                Pro
              </Badge>
            </div>
            <p className='text-center text-gray-400 font-normal text-sm'>
              Unlimited number of prompts and faster response
            </p>
          </DialogTitle>
          <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
            <div className='grid grid-cols-3 gap-4 items-center justify-center'>
              {tools.map((tool) => (
                <div
                  key={tool.label}
                  className='flex flex-col space-y-5 justify-center items-center border border-gray-800 rounded-lg p-4'
                >
                  <tool.icon className={cn('w-6 h-6 text-gray-200')} />
                  <h1 className='text-gray-300'>{tool.label}</h1>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size='lg'
            className='w-full py-4 bg-emerald-600 hover:bg-emerald-700'
          >
            Upgrade <ZapIcon className='w-4 h-4 ml-2 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProModal
