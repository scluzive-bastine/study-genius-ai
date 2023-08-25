'use client'
import { ZapIcon } from 'lucide-react'
import { Button } from '../ui/button'
import axios from 'axios'
import { useState } from 'react'

interface SubscriptionButtonProps {
  isPro: boolean
}

const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false)
  const subscribe = async () => {
    try {
      setLoading(true)

      const response = await axios.get('/api/stripe')
      window.location.href = response.data.url
    } catch (error) {
      console.log('[BILLING ERROR]', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Button onClick={subscribe} className='bg-emerald-500 hover:bg-emerald-600' disabled={loading}>
      {isPro ? 'Mange Subscription' : 'Upgrade'}
      {!isPro && <ZapIcon className='w-4 h-4 fill-white' />}
    </Button>
  )
}

export default SubscriptionButton
