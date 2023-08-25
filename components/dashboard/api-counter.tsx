'use client'
import { Button } from '@/components/ui/button'
import { Progress } from '../ui/progress'
import { ZapIcon } from 'lucide-react'
import { MAX_FREE_COUNTS } from '@/constants'
import { useProModal } from '@/hooks/pro-modal'
import { useEffect, useState } from 'react'

interface FreeCounterProps {
  apiLimitCount: number
  isPro: boolean
}
const ApiCounter = ({ apiLimitCount = 0, isPro = false }: FreeCounterProps) => {
  const proModal = useProModal()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (isPro) {
    return null
  }

  return (
    <div>
      <div className='text-center text-sm text-white mb-4 space-y-2'>
        <p>
          {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
        </p>
        <Progress className='h-3' value={(apiLimitCount / MAX_FREE_COUNTS) * 100} />
      </div>
      <Button className='w-full flex justify-between mb-2 p-3' onClick={proModal.onOpen}>
        <div className='flex space-x-2'>
          <ZapIcon className='w-5 h-5 fill-white' /> <span>Upgrade</span>
        </div>
        <span className='uppercase px-2 py-1 bg-emerald-600 rounded ml-2 text-xs'>Pro</span>{' '}
      </Button>
    </div>
  )
}

export default ApiCounter
