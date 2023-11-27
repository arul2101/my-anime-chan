import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WrapComponents from '@/components/WrapComponents'
import { ContextProvider } from '@/contexts/ContextProvider'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyAnimeChan',
  description: 'MyAnimeChan by Anwar Production',
  icons: '/logo.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark`}>
        <WrapComponents>
          <Navbar />
          <ContextProvider>
            {children}
          </ContextProvider>
        </WrapComponents>
        <Footer />
      </body>
    </html>
  )
}
