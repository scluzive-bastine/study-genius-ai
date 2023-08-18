import Header from '@/components/dashboard/header'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    title: 'Research Paper',
    description:
      'Unleash the Power of Ideas: Our Research Paper Generator helps you navigate the complex world of academia. Instantly explore relevant and compelling research topics, creating a foundation for your next groundbreaking paper. Let AI fuel your inspiration and take your research to new heights.',
    href: '/research',
  },
  {
    title: 'Code Helper',
    description:
      'Your Personal Programming Guide. Tackle coding challenges with confidence using our AI-powered Code Helper. Receive instant suggestions, debug insights, and optimize your code for efficiency. Let AI be your co-pilot on your coding journey, turning challenges into triumphs.',
    href: '/code',
  },
  {
    title: 'Career Path',
    description:
      'Our Career Path Advisor is your compass in the professional world. Discover tailored career trajectories based on your passions, strengths, and ambitions. Let AI guide you toward the opportunities that align with your aspirations and open doors to a fulfilling future.',
    href: '/career',
  },
  {
    title: 'Note-Taking Assistant',
    description:
      'Meet our Note-Taking Assistant, designed to transform your study experience. Capture lectures, ideas, and insights effortlessly while our AI helps organize, summarize, and highlight key points. Maximize your retention and focus on what truly matters—learning.',
    href: '/notes',
  },
  {
    title: 'Language Translation Study Aid',
    description:
      'Breaking Language Barriers, Expanding Horizons: Introducing our Language Translation Study Aid. Seamlessly translate complex academic texts into your preferred language, ensuring clarity and comprehension. Let AI enable cross-cultural learning, making knowledge accessible to all.',
    href: '/language',
  },
]

const DashboardPage = () => {
  return (
    <div className='max-w-screen-md mx-auto'>
      <Header title='Study Group - Dashboard' />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
        {services.map((service) => (
          <Link href={service.href} key={service.title}>
            <article className='bg-gradient-to-r from-[#FF725E]/50 via-pink-500/30 to-emerald-200/50 hover:from-[#FF725E]/80 hover:via-pink-500/60 hover:to-emerald-200/80 h-full group p-0.5 rounded-lg transition-all ease-in-out duration-200'>
              <div className='bg-[#0b0c0e] p-4 h-full rounded-lg flex flex-col space-y-4 justify-between'>
                <div>
                  <h1 className='text-gray-200 font-semibold text-2xl mb-2'>{service.title}</h1>
                  <p className='text-muted-foreground text-sm'>{service.description}</p>
                </div>
                <div className='flex justify-end'>
                  <Button className='bg-transparent group-hover:bg-white/10 ml-auto'>
                    Explore More
                    <ChevronRightIcon className='w-5 h-5 ml-2' />
                  </Button>
                </div>
              </div>
            </article>
          </Link>
        ))}
        <div className='bg-gray-900/50 p-4 h-full rounded-lg flex flex-col space-y-4 justify-between'>
          <div>
            <h1 className='text-white font-semibold text-2xl mb-2'>
              Imporve your knowledge by using our AI
            </h1>
            <p className='text-muted-foreground text-sm'>
              Elevate your journey with our range of services. From research insights to coding
              prowess, our tools maximize your potential. Let AI drive your success, wherever your
              ambitions take you
            </p>
          </div>
          <div className='relative w-full h-12'>
            <Image fill objectFit='contain' src='/chain.svg' alt='Chain' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashboardPage
