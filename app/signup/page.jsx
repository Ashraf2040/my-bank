import React from 'react'
import Signup from '../components/Signup'
import { getServerSession } from 'next-auth'
import { RedirectType, redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

const RegisterPage = () => {
  // const session = getServerSession(authOptions)

  // if(session) redirect("/profile");
  return (
    <div>
     <Signup /> 
    </div>
  )
}

export default RegisterPage
