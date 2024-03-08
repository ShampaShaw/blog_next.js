import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body >
        <div className={inter.className}>
          <div className='container mx-auto px-50 min-h-screen flex flex-col justify-between'>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}