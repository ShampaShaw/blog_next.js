import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-white text-black'>
        <div>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}