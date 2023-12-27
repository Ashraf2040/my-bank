import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import ReactToast from './components/ReactToastify'



// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Al-Ahli Club Bank',
  description: 'All of your needs in on place',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      
      <body className= " relative  bg-main-background2 " suppressHydrationWarning={true} >

          <div><Nav /></div>
      <div className='grid grid-cols-6 w-full h-4/5 overflow-y-hidden'>
        <div className=''><SideBar /></div>
        <div className='col-span-5 flex  justify-center relative '>{children}</div>

      </div>
      <ReactToast />
      <div className=' w-full '><Footer /></div>
        
      
        
        </body>
    </html>
  )
}
