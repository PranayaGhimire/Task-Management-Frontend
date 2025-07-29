import LoginForm from '@/components/Auth/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
         <div className=' m-10 p-10 bg-white rounded-lg shadow-lg'>
            <LoginForm/>
        </div>
    </div>
  )
}

export default LoginPage
