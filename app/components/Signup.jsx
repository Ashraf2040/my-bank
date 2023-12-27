"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'



const Signup = () => {

  


  const [email,setEmail]= useState('')
  const [username,setUserName]= useState("")
  const [password,setPassword]= useState("")
  const [credit,setCredit]= useState("")
  // const [accountNo,setAccountNo]=useState(0)
  // const [iban,setIban]=useState("")
  // const [withdraw,setWithdraw]= useState([])
  // const [deposits,setDeposits]= useState([])
  

  
 const AccountNo = "55026365" +credit
 const IBAN = "EGY112023" + AccountNo

  const router = useRouter()
     
  

  const handleSubmit = async (e) => {


    e.preventDefault()
   
    if(!username||!email||!password){

      toast("All fields are required")
      return;
    } 

  try {
   
    const res = await fetch("/api/register",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({email,username,password,credit,AccountNo,IBAN})
    })

    if(res.ok){
      toast("User has been successfully registered")
      // localStorage.setItem("credit",credit)

      const form = e.target;
      form.reset()
      router.push("/login")
      

    }else{
      toast("Error Occured please try again")
    }
    
  } catch (error) {

     
    console.log(error)
    
  }
    
  }
  return (
 
  
      <div className='flex items-center justify-center mt-8 flex-col font-semibold text-[#f1d18a]'>
          <h1  className='bg-[#407088] py-4 rounded-lg  px-8 w-[450px] text-center text-[#fffbe0] font-semibold'>Sign Up For Free Account</h1>
          <form className=' px-8 py-8 gap-4 flex flex-col w-[500px] text-[#222831]' onSubmit={handleSubmit}>
              <div className='flex justify-between items-center'> <label htmlFor="firstname"> First Name :  </label>
              <input className='bg-gray-100 px-4 py-1 rounded-lg'  id='firstname' type='text' placeholder='First name'/></div>
             <div className='flex justify-between'><label htmlFor="lastname"> Last Name :</label>
              <input className='bg-gray-100 px-4 py-1 rounded-lg' id='lastname'  type='text' placeholder='last name'/></div>
             <div className='flex justify-between'><label htmlFor="username">User Name :</label>
              <input className='bg-gray-100 px-4 py-1 rounded-lg' id='username'  type='text' placeholder='User Name' onChange={(e)=>setUserName(e.target.value)}/></div>
             <div className='flex justify-between'><label htmlFor="email"> E-Mail :</label>
              <input className='bg-gray-100 px-4 py-1 rounded-lg' type='email' id='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} /></div>
             <div className='flex justify-between' ><label htmlFor="cemail"> Re-Enter Email :</label>
              <input className='bg-gray-100 px-4 py-1 rounded-lg' type='email' id='cemail' placeholder='Email Confirmation' /></div>
             <div className='flex justify-between'> <label htmlFor="password"> password :</label>
          <input className='bg-gray-100 px-4 py-1 rounded-lg' id='password' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /></div>
             <div className='flex justify-between'> <label htmlFor="cpassword">Re-Enter password :</label>
              <input className='bg-gray-100 px-4 py-1 rounded-lg'id='cpassword' type='password' placeholder=' confirmation password' /></div>
             <div className='flex justify-between'> <label htmlFor="ideposite">Initial Deposite :</label>
              <input className='bg-gray-100 px-4 py-1 rounded-lg' id='ideposite'  placeholder=' Initial deposite' onChange={(e)=>setCredit(e.target.value)}/></div>
           
              
              <button className='bg-[#407088] py-2 rounded-lg text-[#fffbe0] font-semibold' type='submit'>Sign Up</button>
              <p className='text-center'>Have an account ? <Link className='text-red-900 font-semibold' href="/signin" > Sign In </Link> or <button className='text-[#36626a]' >Sign Up With Google</button></p>
             
      </form>
    </div>
  )
}

export default Signup
