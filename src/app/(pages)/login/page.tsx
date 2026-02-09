
import { LoginForm } from '@/components/LoginForm/LoginForm'
import React from 'react'

export default function Login() {
  return <>

    <div className='min-h-[60vh] flex flex-col justify-center items-center gap-8'>
      <h2 className='text-4xl font-bold'>Welcome Back !</h2>
    
  <LoginForm/>
    </div>
  </>
}
