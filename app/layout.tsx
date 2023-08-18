import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './context/client-provider'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StudyGenius',
  description: 'Empowering Minds, Elevating Success',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang='en'>
      <body className={cn('bg-[#0e0c15]', inter.className)}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  )
}
