
"use client"
import React from 'react'
import Link from 'next/link';

const SideBar = () => {


  return (
    <div className='  py-12  h-screen px-2 mt-20'>
          
            
       <ul className='flex flex-col text-[#407088] '>

          
           <Link href="" className='hover:bg-[#bbe4e9] bg-[#407088] text-[#fffbe0] border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >  HOME    </Link>
           <Link href="" className='hover:bg-[#bbe4e9] bg-gray-300 border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >  Account    </Link>
           <Link href="" className='hover:bg-[#bbe4e9] bg-gray-300 border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >Transaction   </Link>
           <Link href="" className='hover:bg-[#bbe4e9] bg-gray-300 border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >  Deposits    </Link>
           <Link href="" className='hover:bg-[#bbe4e9] bg-gray-300 border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >  Advertisement    </Link>
           <Link href="" className='hover:bg-[#bbe4e9] bg-gray-300 border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >  Requested Loans    </Link>
           <Link href="" className='hover:bg-[#bbe4e9] bg-gray-300 border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >  Annual Profits    </Link>
           <Link href="" className='hover:bg-[#bbe4e9] bg-gray-300 border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >  Newslatter    </Link>
           <Link href="" className='hover:bg-[#bbe4e9] bg-gray-300 border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >  Adresses   </Link>
           <Link href="" className='hover:bg-[#bbe4e9] bg-gray-300 border-b-2 relative w-full px-4  py-4 font-bold mb-1 rounded-lg' >  Contact Us    </Link>
         

              
       </ul>


    </div>
  )
}

export default SideBar
