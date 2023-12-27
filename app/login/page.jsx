"use client"
import { useCookies } from 'react-cookie'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import { toast } from 'react-toastify'


const Login = () => {
  const [user, setUser] = useState({ email: "",password: "",credit :"" ,AccountNo:"",IBAN:""})

 const router = useRouter()
 
  const onSubmit = async(e) => {
    e.preventDefault()
 
    try {

       await axios.post("api/login", user);
    
      toast.success("Login success");
      router.push("/profile");

      const userSent = JSON.stringify(user)
     localStorage.setItem("user",userSent)
          
    } catch (error) {
      toast("Unecpected Error Happened")
    }
  }
  return (
     <div className='flex items-center justify-center flex-col font-semibold  text-[#fffdef]'>
          <h1  className='bg-[#407088] rounded-lg py-4 px-8 w-[450px] text-center text-[] font-semibold'>Sign In Current User</h1>
          <form className=' px-8 py-8 gap-4 flex flex-col w-[500px]' onSubmit={onSubmit} >
              
             <div className='flex justify-between text-[#222831]'><label htmlFor="email"> E-Mail :</label>
          <input className='bg-gray-100 px-4 py-1 rounded-lg' type='email'
            id='email' placeholder='Email'
           name='email' 
           onChange={(e) => setUser({...user, email: e.target.value})}
            />
        </div>
            
             <div className='flex justify-between text-[#222831]'> <label htmlFor="password"> password :</label>
          <input className='bg-gray-100 px-4 py-1 rounded-lg' id='password' type='password'
            placeholder='password'
            onChange={(e) => setUser({...user, password: e.target.value})}
        name='password'  />
        </div>
             
           
              
              <button  type='submit' className='bg-[#407088] rounded-lg py-4 text-[#fffbe0] font-semibold'>Sign In</button>
              <p className='text-center text-[#222831]'>Dont have an account ? <Link className='text-red-900 font-semibold' href="/signup" > Sign Up</Link></p>
             
      </form>
    </div>
  )
}

export default Login
