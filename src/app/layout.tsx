import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-gray-800 white'>
        <div>
          <div className='max-w-2xl mx-auto pl-50 pr-50 min-h-screen flex flex-col justify-between'>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}