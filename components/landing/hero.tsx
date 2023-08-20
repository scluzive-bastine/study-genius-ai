'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import TypewriterComponent from 'typewriter-effect'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='pt-[5rem] lg:pt-[8rem] relative mb-[2.5rem] px-2 md:px-4 2xl:px-0 overflow-hidden'>
      <div className='lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto relative z-50'>
        <h1 className='text-center text-[2rem] lg:text-[3.5rem] font-[600] text-white'>
          Unlock Your Academic Potential with <br /> AI-Powered{' '}
          <span className='relative inline-block'>
            Learning{' '}
            <Image
              width={624}
              height={28}
              className='inline-block align-top transition-opacity opacity-100 absolute top-full left-0 w-full xl:-mt-2'
              src='/curve.png'
              alt='Curve'
            />
          </span>
        </h1>
        <p className='text-muted-foreground mt-5 text-lg text-center'>
          Your ultimate AI-powered companion for academic excellence. Whether you&apos;re a student
          looking to excel in your studies or a researcher seeking innovative insights, StudyGenius
          is here to elevate your learning experience.
        </p>
        <div className='flex justify-center mt-10'>
          <Link href='/dashboard'>
            <Button className='bg-white hover:bg-white/80 font-semibold text-[#0e0c15]'>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <div className='max-w-screen-lg mb-[2rem] lg:mb-[5.5rem]'>
        <div className='absolute left-1/2 w-[78rem] aspect-square border border-gray-200/5 rounded-full -translate-x-1/2 -top-[10rem]'>
          <div className='absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-gray-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse'></div>
          <div className='absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-gray-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse'></div>
          <div className='absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-gray-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse'></div>
          <div className='absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-gray-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse'></div>
          <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]'>
            <div className='w-2 h-2 -ml-1 -mt-4 bg-gradient-to-b from-[#FF725E] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
          </div>
          <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]'>
            <div className='w-4 h-4 -ml-1 -mt-4 bg-gradient-to-b from-[#FF725E] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
          </div>
          <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]'>
            <div className='hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
          </div>
          <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]'>
            <div className='w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
          </div>
          <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]'>
            <div className='w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
          </div>
          <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]'>
            <div className='w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
          </div>
        </div>
      </div>
      <div className='relative rounded-2xl max-w-[23.25rem] md:max-w-5xl bg-vn p-1 mx-auto'>
        <div className='w-full h-[1.375rem] bg-gray-600 flex justify-start rounded-t-[0.875rem] items-center px-2'>
          <div className='flex space-x-2'>
            <span className='bg-red-500 rounded-full h-2 w-2'></span>
            <span className='bg-yellow-400 rounded-full h-2 w-2'></span>
            <span className='bg-green-700 rounded-full h-2 w-2'></span>
          </div>
        </div>
        <div className='relative'>
          <div className='aspect-[33/40] rounded-b-[0.875rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
            <Image
              className='rounded-b-[0.875rem]'
              fill
              alt='Bg'
              objectFit='cover'
              src='/bg.jpeg'
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='bg-[#0e0c15]/80 rounded-full px-3 py-1.5 lg:px-5 lg:py-3.5 absolute bottom-5 w-4/5 lg:w-3/5 backdrop-blur text-white text-lg'>
            <TypewriterComponent
              options={{
                strings: [
                  'Research Paper.',
                  'Coding Helper.',
                  'Note-taking Assistant.',
                  'Language Translation Study.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
