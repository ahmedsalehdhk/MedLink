import React from 'react'
import { Link } from 'react-router-dom';

// components
import PrimaryButton from '../components/PrimaryButton'

const Login = () => {

  const handleLogin = () => {
    alert('Login successful')
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-5'>
      <h1 className='font-bold text-6xl mb-5'>MedLink⚕️</h1>
      <div onClick={handleLogin} className="">
        <PrimaryButton title="Login" to="/dashboard" />
      </div>
      <Link to="signup" className='hover:underline'>New here? Create an account</Link>
    </div>
  )
}

export default Login
