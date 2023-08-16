import Image from 'next/image'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='pt-[5rem] lg:pt-[12rem] relative'>
      <div className='max-w-screen-lg mx-auto px-2 lg:px-0 relative z-50'>
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
          <Button className='bg-white font-semibold text-[#0e0c15]'>Get Started</Button>
        </div>
      </div>
      <div className='max-w-screen-lg'>
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
    </div>
  )
}

export default Hero
