import Header from '@/components/dashboard/header'
import SubscriptionButton from '@/components/dashboard/subscription-button'
import { checkSubscription } from '@/lib/subscription'
import React from 'react'

const SettingsPage = async () => {
  const isPro = await checkSubscription()

  return (
    <div className='mt-10'>
      <Header title='Settings' description='Manage account settings' />
      <div className='px-4 lg:px-8 space-y-4'>
        <div className='text-gray-300 text-lg'>
          {isPro ? 'You are currently on a pro plan' : 'You are currently on a free plan'}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  )
}

export default SettingsPage
