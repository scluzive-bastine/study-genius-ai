'use client'
import { Button } from './ui/button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const Login = () => {
  const PROVIDER = 'google'

  const handleSubmit = () => {
    signIn(PROVIDER, { callbackUrl: '/dashboard' })
  }
  return (
    <div className='max-w-screen-md mx-auto h-full flex items-center justify-center'>
      <section className='text-center'>
        <h1 className='text-5xl font-bold text-white mb-4 font-sans'>
          Supercharge Your Learning with AI-Powered Assistance
        </h1>
        <p className='text-muted-foreground mb-5 max-w-xl mx-auto'>
          Sign in below with Google to create a free account and redesign your room today. You will
          get 3 generations for free.
        </p>
        <div className='flex justify-center'>
          <Button
            onClick={handleSubmit}
            className='bg-white font-semibold text-black hover:text-gray-800 hover:bg-white/90 flex space-x-2 items-center w-auto'
          >
            <div className='relative w-5 h-5'>
              <Image fill src='/google.svg' objectFit='contain' alt='Google Logo' />
            </div>
            <span>Sign in with Google</span>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Login
