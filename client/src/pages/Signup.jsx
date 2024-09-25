import React from 'react'
import { Link } from 'react-router-dom';

// components
import PrimaryButton from '../components/PrimaryButton'

const Signup = () => {

  const handleSignup = () => {
    alert('Signup successful')
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-5'>
      <h1 className='font-bold text-6xl mb-5'>MedLink⚕️</h1>
      <div onClick={handleSignup} className="">
        <PrimaryButton title='Signup' to='/dashboard' />
      </div>
      <Link to='/' className='hover:underline'>Have an account? Login instead</Link>
    </div>
  )
}

export default Signup
