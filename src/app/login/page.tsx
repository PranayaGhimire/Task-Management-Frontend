import LoginForm from '@/components/Auth/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
         <div className=' m-10 p-10 rounded-lg shadow-2xl'>
            <LoginForm/>
        </div>
    </div>
  )
}

export default LoginPage
