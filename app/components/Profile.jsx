"use client"

import axios from 'axios';
import React, { useState } from 'react'
import  {  useEffect } from 'react';
import { toast } from 'react-toastify';

const Profile = () => {

const [cutomerName,setCustomerName]= useState("")
const [details,setDetails]= useState(false)
const [userCredit,setUserCredit]= useState(0)
const [Accountnumber,setAccountNumber]= useState(0)
const [userIBAN,setUserIBAN]= useState("")
const [amountdepo,setAmountDepo]= useState(0)
const [amountWithdraw,setAmountWithdraw]= useState(0)
const [acc_no,setAcc_No]= useState(0)

const [user,setUser] =useState ({})
const [id,setID] =useState ('')

// console.log(userData)
useEffect(()=>{
  const userInfo = localStorage.getItem("user")
const userData = JSON.parse(userInfo)
const {email:userEemail}= userData

const fetchedData = async()=>{
  const response = await axios.get("api/auth/userData").then((reqs)=>reqs.data)
 const data = response.users
 const user = data.filter((user)=>user.email ===userEemail)
 console.log(userEemail)
 const {username,credit:userCredit,AccountNo,IBAN,_id} = user[0]

//  console.log(username,userCredit,withdraw,deposits,AccountNo,IBAN)
setCustomerName(username)
setUserCredit(userCredit)
setAccountNumber(AccountNo)
setUserIBAN(IBAN)
setUser({username,userCredit,AccountNo,IBAN})
setID(_id)
}

fetchedData()
   


},[])

  const depositeHandler =async () => {
  const formData = {
          ids : id,
          amount : amountdepo,
  }

  try {
    const response =    await fetch("/api/userinfo/deposits",{
      method:"POST",
      body: JSON.stringify(formData),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    if(response.ok){
      toast("the credit is updated successfully")
    }else{
      toast("Unexpexter Error happened")
    }

  } catch (error) {
    console.log(error)
  }
 
   



  //  console.log(userid)

   }
 

  const withdrawalHandler = async() => {
    const formData = {
          ids : id,
          amount : amountWithdraw,
  }

  try {
    const response =    await fetch("/api/userinfo/withdraw",{
      method:"POST",
      body: JSON.stringify(formData),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    if(response.ok){
      toast("the credit is updated successfully")
    }else{
      toast("Unexpexter Error happened")
    }

  } catch (error) {
    console.log(error)
  }
 
   
  
}
  const requestLoanHandler = () => {
  
}

  return (
    <div className=' w-full h-full flex flex-col gap-8 '>
    <div className='  flex  items-center justify-between  text-xl text-[#407088] font-semibold px-4  pr-8  '>
        <h1>Welcome back, {cutomerName} </h1>
      <h1>Your Credit is : <span className='bg-[#407088] p-1  rounded-md text-[#fffbe0]'> {userCredit}</span ></h1>
      </div>
      <div className="flex  flex-col gap-2 pl-4 " >
       <button className='bg-[#407088] w-32 px-2 py-2 rounded-full text-[#fffbe0] font-semibold'   onClick={(e)=>setDetails(!details)}  >{!details?"Show details":"Hide details"}</button>
      <div className={`opacity-${details?"1":"0"}`}>
      <p className='font-semibold text-[#407088] ml-16'>IBAN : {userIBAN}</p>
        <p className='font-semibold text-[#407088] ml-16'>Account No : {Accountnumber}</p></div></div>
      <div className="line w-full    h-4 bg-[#407088]"></div> 
      <div className="actions grid w-full xs:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-3 grid-rows-1 px-4 pr-8 gap-4 text-[#f1d18a] font-semibold " >
        
        
        <div className="Deposite rounded-md bg-[#407088] p-2 h-fit col-span-1  flex flex-col gap-4 items-center justify-center ">
          <h1 className='font-bold text-center mb-4  text-[#fffbe0]'>Deposite</h1>
          
          <div className='flex items-center justify-center gap-3 w-full text-[#fffbe0]'>
           
            
            <label htmlFor="amount"> Amount : </label>
          <input type="number" id='amount' className='bg-[#fffbe0] text-[#407088] min-w-fit '
          onChange={(e)=>setAmountDepo(e.target.value)} /></div>      
        <div className='flex items-center justify-center gap-3 w-full text-[#fffbe0]'><label htmlFor="amount"> Acco. No : </label>
          <input type="number" id='amount' className='bg-[#fffbe0] text-[#407088]   '
           onChange={(e)=>setAcc_No(e.target.value)
          } /></div>      
             <button className='px-2 text-center rounded-sm bg-[#fffbe0] text-[#407088]' onClick={depositeHandler}>Submit</button>
        </div>
        <div className="Withdrawal rounded-md bg-[#407088] p-2 h-fit col-span-1  flex flex-col gap-4 items-center justify-center text-[#fffbe0] ">
                    <h1 className='font-bold text-center mb-4'>Withdraw</h1>

          <div className='flex items-center justify-center gap-3 w-full text-[#fffbe0]'><label htmlFor="amount"> Amount : </label>
            
          <input type="number" id='amount' className='bg-[#fffbe0] text-[#407088]  ' onChange={(e)=>setAmountWithdraw(e.target.value)} /></div>      
        <div className='flex items-center justify-center gap-3 w-full text-[#fffbe0]'><label htmlFor="amount"> Acco. no : </label>
            <input type="number" id='amount' className='bg-[#fffbe0] text-[#407088]  ' /></div> 
            <button className='px-2 text-center rounded-sm bg-[#fffbe0] text-[#407088]' onClick={withdrawalHandler}>Submit</button>
        
        </div>
        <div className="Deposite rounded-md bg-[#407088] p-2 h-fit  col-span-1  flex flex-col gap-4 items-center justify-center ">
                  <h1 className='font-bold text-center mb-4 text-[#fffbe0]'>Request Loan</h1>

          <div className='flex items-center justify-center gap-3 w-full text-[#fffbe0]'><label htmlFor="amount"> Amount : </label>
          <input type="number" id='amount' className='bg-[#fffbe0] text-[#407088]  ' /></div>      
        <div className='flex items-center justify-center gap-3 w-full text-[#fffbe0]'><label htmlFor="amount"> Purpose : </label>
            <input type="text" id='amount' className='bg-[#fffbe0] text-[#407088]  ' /></div>  
            <button className='px-2 text-center rounded-sm bg-[#fffbe0] text-[#407088]' onClick={requestLoanHandler}>Submit</button>
           
        </div>
      
      <div>
      <form></form>
      </div>
      
      </div>
        
        
      
   
      
      </div>
  )
}

export default Profile
