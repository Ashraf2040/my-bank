
"use client"
import axios from 'axios'
import Image from 'next/image'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import React from 'react'
import { toast } from 'react-toastify'


const Nav = () => {


const pathname = usePathname()

  const router = useRouter()
    const handleLogOut =async()=>{
try {

  await axios.get("/api/logout")
router.push("/")
} catch (error) {
  toast(error)
}

    }
// bg-[#001731]
    // const router = useRouter()
 
  return (
      <div className='h-20 px-4 bg-[#407088] w-full flex static text-[#fffbe0]  items-center justify-between text-lg   font-semibold '>
          <div className=''><a href="/"><Image width={500} height={500}  className='w-24 rounded-lg h-16' src="/bank-3_1_0_0.jpg" alt="" /></a></div>
          <nav className='hidden lg:block'>
              <ul className='flex items-center justify-between gap-4 '>
                  <li>Explore</li>
                  <li>Service</li>
                  <li>Adress</li>
                  <li>Employees</li>
                  <li>Service</li>
                  <li>Announcement</li>
                  <li>Offers</li>
              </ul>
          </nav>
         
          <div>
        
       
        {pathname==="/profile" ?<button onClick={handleLogOut}>Sign Out</button>
       : <div className='flex items-center gap-4'><Link className={pathname==="/login"?"hidden":""} href="/login">Sign In</Link>
                <Link href="/signup">Register</Link>
                
                </div> } 
                  
          
          </div>
    </div>
  )
}

export default Nav
