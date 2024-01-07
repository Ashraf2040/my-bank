import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './AppLayout'
const Login = () => {
const[email,setEmail]= useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
 
  const { setIsLogged,isLogged } = useContext(UserContext)
  
  const signIn = async () => {
   try {
     await signInWithEmailAndPassword(auth, email, password)

     localStorage.setItem("userEmail",email)
     localStorage.setItem("loggedUser",isLogged)
   
     navigate("/profile" ,{replace:true})
   } catch (error) {
    console.log("there is no user")
   }
    
    
    
  }



 
  
  const onSubmit = (e) => {
    e.preventDefault()
    signIn()
    setIsLogged(true)
    // dispatch({type:"SET_USER",payload : email})
  }
  return (
     <div className='flex items-center justify-center flex-col font-semibold   '>
          <h1  className=' rounded-lg py-4 px-8 w-[450px] text-center  font-semibold text-[#fffbe0]'>Sign In Current User</h1>
          <form className=' px-8 py-8 gap-4 flex flex-col w-[500px]' onSubmit={onSubmit}>
              
             <div className='flex justify-between text-[#222831]'><label className="text-[#222831]" htmlFor="email"> E-Mail :</label>
          <input className='bg-gray-100 px-4 py-1 rounded-lg ' type="email"
            id='email' placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
            
             <div className='flex justify-between'> <label htmlFor="password"> password :</label>
          <input className='bg-gray-100 px-4 py-1 rounded-lg' id='password' type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
             
           
              
              <button  type='submit' className='bg-[#36626a] rounded-lg py-4 text-[#fffbe0] font-semibold'>Sign In</button>
              <p className='text-center'>Dont have an account ? <Link className='text-[#36626a] font-semibold' to="/signup" > Sign Up</Link></p>
             
      </form>
    </div>
  )
}

export default Login
