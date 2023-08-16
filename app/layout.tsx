import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StudyGenius',
  description: 'Empowering Minds, Elevating Success',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('bg-[#0e0c15]', inter.className)}>{children}</body>
    </html>
  )
}
